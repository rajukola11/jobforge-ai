from utils.scraper import extract_job_text

def get_job_description(job_text: str, job_url: str) -> str:

    if job_url:
        return extract_job_text(job_url)

    return job_text or ""