from fastapi import APIRouter
from pydantic import BaseModel

import google.generativeai as genai
import os

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
def chat(data: ChatRequest):

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

    return {
        "reply": response.text
    }