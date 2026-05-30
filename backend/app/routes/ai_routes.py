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
    prefix="/ai",
    tags=["AI"]
)


class SymptomRequest(BaseModel):
    symptoms: str


@router.post("/symptom-checker")
def symptom_checker(data: SymptomRequest):

    prompt = f"""
    You are a medical AI assistant.

    Analyze these symptoms:

    {data.symptoms}

    Give:

    1. Possible conditions
    2. Severity level
    3. Recommended actions
    4. When to see a doctor

    Add a disclaimer that this is not a medical diagnosis.
    """

    response = model.generate_content(
        prompt
    )

    return {
        "analysis": response.text
    }