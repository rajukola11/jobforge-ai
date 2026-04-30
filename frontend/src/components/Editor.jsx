import React from "react";

function Editor({ result, setResult }) {
  return (
    <>
      <h3>Improved CV</h3>
      <textarea
        rows="10"
        style={{ width: "100%" }}
        value={result.improved_cv}
        onChange={(e) =>
          setResult({ ...result, improved_cv: e.target.value })
        }
      />

      <h3>Cover Letter</h3>
      <textarea
        rows="10"
        style={{ width: "100%" }}
        value={result.cover_letter}
        onChange={(e) =>
          setResult({ ...result, cover_letter: e.target.value })
        }
      />
    </>
  );
}

export default Editor;