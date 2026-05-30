from fastapi import APIRouter
from fastapi import Depends

from pydantic import BaseModel

from sqlalchemy.orm import Session

import google.generativeai as genai
import os

from app.database import get_db
from app.models import ChatMessage
from app.auth_dependency import get_current_user

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)

router = APIRouter(
    prefix="/chatbot",
    tags=["Chatbot"]
)


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
def chat(
    data: ChatRequest,
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db)
):

    prompt = f"""
You are an AI Healthcare Assistant.

Rules:
- Provide educational health information.
- Never provide a definitive diagnosis.
- Explain things in simple language.
- Recommend professional medical help for serious symptoms.
- Use markdown formatting with headings and bullet points.

User:
{data.message}
"""

    response = model.generate_content(
        prompt
    )

    chat_record = ChatMessage(
        user_id=current_user["user_id"],
        message=data.message,
        response=response.text
    )

    db.add(chat_record)

    db.commit()

    return {
        "reply": response.text
    }


@router.get("/history")
def get_chat_history(
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db)
):

    history = db.query(
        ChatMessage
    ).filter(
        ChatMessage.user_id ==
        current_user["user_id"]
    ).order_by(
        ChatMessage.id.desc()
    ).all()

    return history