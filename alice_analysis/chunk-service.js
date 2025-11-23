export function splitIntoSentences(text) {
  return text
    .split(/[.\n]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

export function chunkBySentences(sentences, maxWords = 300) {
  const chunks = [];
  let currentChunk = [];
  let currentWordCount = 0;

  for (const sentence of sentences) {
    const wordCount = sentence.split(/\s+/).length;

    if (currentWordCount + wordCount > maxWords && currentChunk.length > 0) {
      chunks.push(currentChunk.join(". "));
      currentChunk = [sentence];
      currentWordCount = wordCount;
    } else {
      currentChunk.push(sentence);
      currentWordCount += wordCount;
    }
  }

  if (currentChunk.length > 0) {
    chunks.push(currentChunk.join(". "));
  }

  return chunks;
}
