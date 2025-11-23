import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv"; // to read the .env file

dotenv.config();
const gemini = new GoogleGenAI({}); // initialize the Gemini client and automatically loads the API key from the .env file

export const askGemini = async (model, userPrompt, systemPrompt) => {
  try {
    const result = await gemini.models.generateContent({
      model,
      contents: [
        { role: "model", parts: [{ text: systemPrompt }] }, // model == system
        { role: "user", parts: [{ text: userPrompt }] },
      ],
      config: {
        thinkingConfig: {
          thinkingBudget: 0,
        },
      },
    });

    return result;
  } catch (error) {
    console.error("Error generating content with LLM:", error);
    throw error;
  }
};
