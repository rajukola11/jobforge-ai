from fastapi import APIRouter
from models.request_model import AnalyzeRequest
from services.ai_service import analyze_with_ai
from services.job_service import get_job_description

router = APIRouter()

@router.post("/analyze")
async def analyze(data: AnalyzeRequest):

    job_description = get_job_description(data.job_text, data.job_url)

    result = await analyze_with_ai(data.cv_text, job_description)

    return {"result": result}