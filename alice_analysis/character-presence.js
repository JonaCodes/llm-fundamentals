import { CHAPTER_1_TEXT } from "./alice-ch1.js";
import { askGemini } from "../gemini-service.js";
import { parseJSONFromString } from "../parsing-service.js";
import { chunkBySentences, splitIntoSentences } from "./chunk-service.js";
import { ALICE_SYSTEM_PROMPT } from "./prompts.js";

async function analyzeCharacterPresence() {
  const model = "gemini-2.5-flash";
  const characters = ["alice", "rabbit", "cat", "sister"];

  const totalScores = {
    alice: 0,
    rabbit: 0,
    cat: 0,
    sister: 0,
  };

  const systemPrompt = ALICE_SYSTEM_PROMPT;
  const sentences = splitIntoSentences(CHAPTER_1_TEXT);
  const chunks = chunkBySentences(sentences, 400);

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    console.log(`Processing chunk ${i + 1}/${chunks.length}...`);

    try {
      const response = await askGemini(model, chunk, systemPrompt);
      const scores = parseJSONFromString(response.text, "object");

      for (const character of characters) {
        totalScores[character] += scores[character] || 0;
      }
    } catch (error) {
      console.error(`Error processing chunk ${i + 1}:`, error.message);
    }

    await new Promise((resolve) => setTimeout(resolve, 500)); // avoid rate limiting
  }

  const totalSum = Object.values(totalScores).reduce(
    (sum, score) => sum + score,
    0
  );

  console.log("\n=== Character Presence Analysis ===\n");
  for (const character of characters) {
    const percentage = ((totalScores[character] / totalSum) * 100).toFixed(1);
    console.log(`${character}: ${percentage}%`);
  }
  console.log("\n===================================");
}

analyzeCharacterPresence().catch(console.error);
