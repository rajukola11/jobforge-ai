from pydantic import BaseModel
from typing import Optional

class AnalyzeRequest(BaseModel):
    cv_text: str
    job_text: Optional[str] = None
    job_url: Optional[str] = None