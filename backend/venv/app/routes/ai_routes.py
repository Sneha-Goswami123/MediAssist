from fastapi import APIRouter
from pydantic import BaseModel
from dotenv import load_dotenv
import google.generativeai as genai
import os

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "models/gemini-2.5-flash"
)

router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)

class SymptomRequest(BaseModel):
    symptoms: str


@router.post("/symptom-checker")
def symptom_checker(data: SymptomRequest):

    prompt = f"""
    You are an AI healthcare assistant.

    Symptoms:
    {data.symptoms}

    Provide:

    1. Possible conditions
    2. Basic recommendations

    Keep response concise.

    End with:

    This is not medical advice.
    """

    response = model.generate_content(prompt)

    return {
        "analysis": response.text
    }