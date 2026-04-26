# 🚀 JobForge AI

JobForge AI is an AI-powered tool that analyzes your CV against a job description and helps you improve your chances of getting interviews.

It identifies gaps, optimizes your CV, and generates tailored application materials instantly.

---

## 🎯 Features

- 📊 Match Score between CV and Job Description  
- ❌ Missing Skills Identification  
- ✍️ AI-Optimized CV  
- 📄 Tailored Cover Letter  
- 🎤 Interview Questions Generation  
- 🔗 Supports Job Description via Text or URL  

---

## 🧱 Tech Stack

### Backend
- FastAPI
- Python
- OpenAI API

### Frontend
- React.js

### Utilities
- BeautifulSoup (Job scraping)
- Requests

---

## 🚀 Getting Started

### 1. Clone the repo

```
git clone https://github.com/rajukola11/jobforge-ai.git
cd jobforge-ai

```

---

### 2. Setup Backend

```

cd backend
python -m venv venv
source venv/bin/activate   # Linux / Mac
venv\Scripts\activate      # Windows

pip install -r requirements.txt

```

Create `.env` file:

```

OPENAI_API_KEY=your_api_key_here

```

Run backend:

```

uvicorn main:app --reload

```

---

### 3. Setup Frontend

```

cd frontend
npm install
npm start

```

---

## 🧪 Usage

1. Paste your CV  
2. Paste job description OR job URL  
3. Click Analyze  
4. Get:
   - Match score  
   - Missing skills  
   - Improved CV  
   - Cover letter  
   - Interview questions  

---

## ⚠️ Disclaimer

- This tool is for educational and productivity purposes  
- Always review AI-generated content before using it  

---

## 📌 Future Improvements

- PDF export  
- User authentication  
- Save analysis history  
- Better job scraping (LinkedIn, Indeed)  
- Improved AI prompts for higher accuracy  

---

## 🤝 Contributing

Contributions are welcome. Feel free to open issues or submit pull requests.

---

## 📄 License

MIT License
```