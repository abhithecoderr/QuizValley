// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import { GoogleGenAI } from "@google/genai";

export async function main(prompt) {
  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });
  const config = {};
  const model = "gemma-3-12b-it";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `"Return strictly (in JSON format) an array containing 10 quiz questions as per the user prompt, each question as an object containing three field: ques, options, ans". user prompt as follows: ${prompt}`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let fullResponse = '';

  for await (const chunk of response) {
    fullResponse += chunk.text;
  }

  try {
    // Use a regex to find the content strictly inside the JSON block.
    const jsonMatch = fullResponse.match(/```json\s*([\s\S]*?)\s*```/);
    
    let quizArray;

    if (jsonMatch && jsonMatch[1]) {
        // If a match is found, parse the captured content.
        const cleanedResponse = jsonMatch[1].trim();
        quizArray = JSON.parse(cleanedResponse);
    } else {
        // Fallback to parsing the original string if no code block is found.
        // This can handle cases where the model correctly returns only JSON.
        quizArray = JSON.parse(fullResponse.trim());
    }
    
    console.log(quizArray);
    return quizArray;

  } catch (error) {
    console.error("Failed to parse JSON:", error);
    console.error("Raw response from model:", fullResponse);
  }
}
