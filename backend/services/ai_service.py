from openai import OpenAI
from core.config import OPENAI_API_KEY

client = OpenAI(api_key=OPENAI_API_KEY)

async def analyze_with_ai(cv: str, job: str):

    prompt = f"""
You are an expert recruiter in Germany.

Analyze the CV against the job description.

Return STRICT JSON:

{{
  "match_score": "percentage",
  "missing_skills": [],
  "improvements": [],
  "improved_cv": "",
  "cover_letter": "",
  "interview_questions": []
}}

CV:
{cv}

JOB DESCRIPTION:
{job}
"""

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3
    )

    return response.choices[0].message.content