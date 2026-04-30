import json
from openai import OpenAI
from core.config import OPENAI_API_KEY

client = OpenAI(api_key=OPENAI_API_KEY)

async def analyze_with_ai(cv: str, job: str):
    prompt = f"""
You are an expert recruiter.

Analyze the CV against the job description.

Return ONLY valid JSON (no explanation):

{{
  "match_score": number (0-100),
  "summary": "short evaluation",

  "missing_skills": [
    {{
      "skill": "string",
      "importance": "high/medium/low"
    }}
  ],

  "improvements": [
    {{
      "section": "string",
      "fix": "string"
    }}
  ],

  "interview_questions": [
    {{
      "question": "string",
      "type": "technical/hr"
    }}
  ],

  "improved_cv": "string",
  "cover_letter": "string"
}}

CV:
{cv}

JOB DESCRIPTION:
{job}
"""

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.3
        )

        content = response.choices[0].message.content

        # 🔥 force JSON parsing
        return json.loads(content)

    except Exception as e:
        return {
            "error": "AI processing failed",
            "details": str(e)
        }