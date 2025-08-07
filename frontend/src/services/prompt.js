export async function fetchLLMResponse(prompt) {
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY; // Vite env variable

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "@preset/quiz-generator",
        messages: [{ role: "user", content: prompt }],
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch from OpenRouter API");
  }

  const data = await response.json();
  let raw = data.choices[0].message.content;
  raw = raw
    .replace(/^\s*```json\s*/, "")
    .replace(/\s*```$/, "")
    .trim();
  const quizArray = JSON.parse(raw);
  console.log(quizArray);
  return quizArray;
  
}
