import React from "react";
import Editor from "./Editor";

function ResultView({ result, setResult, downloadFile }) {
  if (!result) return null;

  return (
    <div style={{ marginTop: 30 }}>
      <h2>Analysis Result</h2>

      <h3>Match Score: {result.match_score}%</h3>

      <h3>Summary</h3>
      <p>{result.summary}</p>

      <h3>Missing Skills</h3>
      <ul>
        {result.missing_skills?.map((s, i) => (
          <li key={i}>
            {s.skill} ({s.importance})
          </li>
        ))}
      </ul>

      <h3>Improvements</h3>
      <ul>
        {result.improvements?.map((imp, i) => (
          <li key={i}>
            <b>{imp.section}:</b> {imp.fix}
          </li>
        ))}
      </ul>

      <h3>Interview Questions</h3>
      <ul>
        {result.interview_questions?.map((q, i) => (
          <li key={i}>{q.question}</li>
        ))}
      </ul>

      <Editor result={result} setResult={setResult} />

      <button
        onClick={() =>
          downloadFile(result.improved_cv, "improved_cv.txt")
        }
      >
        Download CV
      </button>

      <button
        onClick={() =>
          downloadFile(result.cover_letter, "cover_letter.txt")
        }
        style={{ marginLeft: 10 }}
      >
        Download Cover Letter
      </button>
    </div>
  );
}

export default ResultView;