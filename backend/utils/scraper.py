import requests
from bs4 import BeautifulSoup

def extract_job_text(url: str) -> str:
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.text, "html.parser")

        # simple extraction (MVP)
        return soup.get_text(separator=" ", strip=True)

    except Exception:
        return "Could not extract job description"