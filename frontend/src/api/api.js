export const analyzeCV = async (formData) => {
  const res = await fetch("http://127.0.0.1:8000/analyze", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("API request failed");
  }

  return res.json();
};