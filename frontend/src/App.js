import { useState } from "react";
import { analyzeCV } from "./api/api";

import CVInput from "./components/CVInput";
import JobInput from "./components/JobInput";
import AnalyzeButton from "./components/AnalyzeButton";
import ResultView from "./components/ResultView";

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

      if (cv) formData.append("cv_text", cv);
      if (jobText) formData.append("job_text", jobText);
      if (jobUrl) formData.append("job_url", jobUrl);
      if (file) formData.append("file", file);

      const data = await analyzeCV(formData);
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Error occurred while analyzing");
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

      <CVInput setCv={setCv} setFile={setFile} />
      <JobInput setJobText={setJobText} setJobUrl={setJobUrl} />
      <AnalyzeButton handleAnalyze={handleAnalyze} loading={loading} />

      <ResultView
        result={result}
        setResult={setResult}
        downloadFile={downloadFile}
      />
    </div>
  );
}

export default App;