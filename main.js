import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv"; // to read the .env file

dotenv.config();
const gemini = new GoogleGenAI({}); // initialize the Gemini client and automatically loads the API key from the .env file

const askGemini = async (model, userPrompt) => {
  try {
    const result = await gemini.models.generateContent({
      model,
      contents: userPrompt,
    });

    return result;
  } catch (error) {
    console.error("Error generating content with LLM:", error);
    throw error;
  }
};

const run = async () => {
  const model = "gemini-3.5-flash-lite";
  const userPrompt = `
  Is the following a positive or negative review?
  "Yeah, this was the *best* book ever - as if."`;

  const response = await askGemini(model, userPrompt);
  const { text: responseText, usageMetadata } = response;

  console.log("\n---\n");
  console.log(`Input tokens: ${usageMetadata.promptTokenCount}`);
  console.log(`Output tokens: ${usageMetadata.candidatesTokenCount}`);
  console.log(`Thinking tokens: ${usageMetadata.thoughtsTokenCount ?? 0}`);
  console.log(`Total tokens: ${usageMetadata.totalTokenCount}`);
  console.log("\n---\n");

  console.log(responseText);
};

run();
