import { CHAPTER_1_TEXT } from "./alice-ch1.js";
import { askGemini } from "../gemini-service.js";

async function analyzeCharacterPresence() {
  const model = "gemini-3.5-flash";
  const characters = ["alice", "rabbit", "cat", "sister"]; // for simplicity, instead of dynamically extracting characters
  const chapterText = CHAPTER_1_TEXT;

  // TODO: implement character presence analysis
  //  Note: you have a `parsing-service.js` file - you can use it to parse the JSON response from the LLM,
  //  but you'll have a task later to implement your own parser, so I recommend not looking at the file yet, just use it and trust me
}

analyzeCharacterPresence().catch(console.error);
