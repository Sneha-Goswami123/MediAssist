from fastapi import APIRouter, UploadFile, File, HTTPException
from pypdf import PdfReader
from dotenv import load_dotenv
import google.generativeai as genai
import tempfile
import os

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "models/gemini-2.5-flash"
)

router = APIRouter(
    prefix="/reports",
    tags=["Medical Reports"]
)


@router.post("/analyze")
async def analyze_report(
    file: UploadFile = File(...)
):

    if not file.filename.endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files allowed"
        )

    try:

        with tempfile.NamedTemporaryFile(
            delete=False,
            suffix=".pdf"
        ) as temp_file:

            content = await file.read()

            temp_file.write(content)

            temp_path = temp_file.name

        reader = PdfReader(temp_path)

        extracted_text = ""

        for page in reader.pages:
            extracted_text += page.extract_text()

        os.remove(temp_path)

        prompt = f"""
        You are an AI healthcare assistant.

        Analyze this medical report.

        Report Text:

        {extracted_text}

        Provide:

        1. Key findings
        2. Abnormal values
        3. Easy-to-understand explanation
        4. Recommendations

        End with:

        This is not medical advice.
        """

        response = model.generate_content(
            prompt
        )

        return {
            "analysis": response.text
        }

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )