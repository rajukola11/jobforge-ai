import { useState } from "react";

function App() {
  const [cv, setCv] = useState("");
  const [jobText, setJobText] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [file, setFile] = useState(null); 
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);

    try {
      const formData = new FormData();

      // Only append if exists
      if (cv) formData.append("cv_text", cv);
      if (jobText) formData.append("job_text", jobText);
      if (jobUrl) formData.append("job_url", jobUrl);
      if (file) formData.append("file", file);

      const res = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      setResult(data.result || JSON.stringify(data));
    } catch (err) {
      console.error(err);
      setResult("Error occurred while analyzing");
    }

    setLoading(false);
  };

  const downloadFile = (content, filename) => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  };

  return (
    <div style={{ padding: 20, maxWidth: 900, margin: "auto" }}>
      <h1>JobForge AI</h1>

      {/* 📄 File Upload */}
      <h3>Upload CV (PDF/DOCX)</h3>
      <input
        type="file"
        accept=".pdf,.docx"
        onChange={(e) => setFile(e.target.files[0])}
      />

      {/* ✍️ Manual CV */}
      <h3>Or Paste CV</h3>
      <textarea
        rows="6"
        style={{ width: "100%" }}
        placeholder="Paste your CV text..."
        onChange={(e) => setCv(e.target.value)}
      />

      {/* 📄 Job Description */}
      <h3>Paste Job Description</h3>
      <textarea
        rows="4"
        style={{ width: "100%" }}
        placeholder="Paste job description..."
        onChange={(e) => setJobText(e.target.value)}
      />

      {/* 🔗 Job URL */}
      <input
        placeholder="OR paste job URL"
        style={{ width: "100%", marginTop: 10 }}
        onChange={(e) => setJobUrl(e.target.value)}
      />

      {/* 🚀 Button */}
      <button onClick={handleAnalyze} style={{ marginTop: 20 }}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {/* 📊 Result */}
      {result && (
        <div style={{ marginTop: 30 }}>
          <h2>Result</h2>

          <pre style={{ whiteSpace: "pre-wrap", background: "#f5f5f5", padding: 10 }}>
            {result}
          </pre>

          <button onClick={() => downloadFile(result, "result.txt")}>
            Download Result
          </button>
        </div>
      )}
    </div>
  );
}

export default App;