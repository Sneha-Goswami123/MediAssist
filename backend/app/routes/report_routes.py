from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File

from pypdf import PdfReader

import tempfile
import os

import google.generativeai as genai

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)

router = APIRouter(
    prefix="/reports",
    tags=["Reports"]
)


@router.post("/analyze")
async def analyze_report(
    file: UploadFile = File(...)
):

    with tempfile.NamedTemporaryFile(
        delete=False,
        suffix=".pdf"
    ) as temp_file:

        content = await file.read()

        temp_file.write(content)

        temp_path = temp_file.name

    reader = PdfReader(temp_path)

    text = ""

    for page in reader.pages:

        extracted = page.extract_text()

        if extracted:

            text += extracted + "\n"

    os.remove(temp_path)

    prompt = f"""
    Analyze this medical report.

    Report:

    {text}

    Give:

    1. Key findings
    2. Abnormal values
    3. Recommendations
    4. Follow-up actions

    Explain in simple language.
    """

    response = model.generate_content(
        prompt
    )

    return {
        "analysis": response.text
    }