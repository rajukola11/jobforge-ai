import { useState } from "react";

function App() {
  const [cv, setCv] = useState("");
  const [jobText, setJobText] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);

    const res = await fetch("http://127.0.0.1:8000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cv_text: cv,
        job_text: jobText,
        job_url: jobUrl,
      }),
    });

    const data = await res.json();
    setResult(data.result);
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
    <div style={{ padding: 20 }}>
      <h1>JobForge AI</h1>

      <h3>Paste CV</h3>
      <textarea
        rows="6"
        style={{ width: "100%" }}
        onChange={(e) => setCv(e.target.value)}
      />

      <h3>Paste Job Description (or URL)</h3>
      <textarea
        rows="4"
        style={{ width: "100%" }}
        onChange={(e) => setJobText(e.target.value)}
      />

      <input
        placeholder="OR paste job URL"
        style={{ width: "100%", marginTop: 10 }}
        onChange={(e) => setJobUrl(e.target.value)}
      />

      <button onClick={handleAnalyze} style={{ marginTop: 20 }}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {result && (
        <div style={{ marginTop: 30 }}>
          <h2>Result</h2>

          <pre style={{ whiteSpace: "pre-wrap" }}>
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