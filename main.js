import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv"; // to read the .env file

dotenv.config();
const gemini = new GoogleGenAI({}); // initializes the Gemini client and automatically loads the API key from the .env file

const askGemini = async (userPrompt) => {
  // TODO: implement
};

const isPositiveReview = (llmResult) => {
  // TODO: implement
};

const run = async () => {
  const userPrompt = `
  Is the following a positive or negative review?
  "Yeah, this was the *best* book ever, only made me want to pull my eyes out of their sockets"`;

  const response = await askGemini(userPrompt);

  console.log(response);
  console.log("\n\n---\n\n");

  if (isPositiveReview(response)) {
    console.log("Celebrate.");
  } else {
    console.log("Alert the author!");
  }
};

run();
