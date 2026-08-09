import { askGemini } from "./gemini-service";

const run = async () => {
  const model = "gemini-2.5-flash";
  const userPrompt = `
  Is the following a positive or negative review?
  "Yeah, this was the *best* book ever - as if."`;

  const response = await askGemini(model, userPrompt);
  const { text: responseText, usageMetadata } = response;

  console.log("\n---\n");
  console.log(`Input tokens: ${usageMetadata.promptTokenCount}`);
  console.log(`Output tokens: ${usageMetadata.candidatesTokenCount}`);
  console.log("\n---\n");

  console.log(responseText);
};

run();
