import React from "react";

function CVInput({ setCv, setFile }) {
  return (
    <>
      <h3>Upload CV (PDF/DOCX)</h3>
      <input
        type="file"
        accept=".pdf,.docx"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <h3>Or Paste CV</h3>
      <textarea
        rows="6"
        style={{ width: "100%" }}
        placeholder="Paste your CV text..."
        onChange={(e) => setCv(e.target.value)}
      />
    </>
  );
}

export default CVInput;