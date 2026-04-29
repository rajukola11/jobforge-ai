from fastapi import APIRouter, UploadFile, File, Form
from services.ai_service import analyze_with_ai
from services.job_service import get_job_description
from utils.file_parser import extract_text_from_pdf, extract_text_from_docx

router = APIRouter()

@router.post("/analyze")
async def analyze(
    cv_text: str = Form(None),
    job_text: str = Form(None),
    job_url: str = Form(None),
    file: UploadFile = File(None)
):
    
    # 📄 Handle file upload
    if file:
        if file.filename.endswith(".pdf"):
            cv_content = extract_text_from_pdf(file.file)
        elif file.filename.endswith(".docx"):
            cv_content = extract_text_from_docx(file.file)
        else:
            return {"error": "Unsupported file type"}
    else:
        cv_content = cv_text

    job_description = get_job_description(job_text, job_url)

    result = await analyze_with_ai(cv_content, job_description)

    return {"result": result}