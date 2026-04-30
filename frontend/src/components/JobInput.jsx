import React from "react";

function JobInput({ setJobText, setJobUrl }) {
  return (
    <>
      <h3>Paste Job Description</h3>
      <textarea
        rows="4"
        style={{ width: "100%" }}
        placeholder="Paste job description..."
        onChange={(e) => setJobText(e.target.value)}
      />

      <input
        placeholder="OR paste job URL"
        style={{ width: "100%", marginTop: 10 }}
        onChange={(e) => setJobUrl(e.target.value)}
      />
    </>
  );
}

export default JobInput;