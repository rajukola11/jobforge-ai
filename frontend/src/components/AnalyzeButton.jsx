import React from "react";

function AnalyzeButton({ handleAnalyze, loading }) {
  return (
    <button onClick={handleAnalyze} style={{ marginTop: 20 }}>
      {loading ? "Analyzing..." : "Analyze"}
    </button>
  );
}

export default AnalyzeButton;