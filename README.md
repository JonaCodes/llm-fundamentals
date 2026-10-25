# LLM Fundamentals

## Proejct Setup Instructions

1. Clone the repo
2. Install dependencies with `npm install`
3. Create a `.env` file and add your Gemini API key (see below)
4. Run the script with `node main.js`

## Gemini API Setup Instructions

Guide: https://ai.google.dev/gemini-api/docs/generate-content/text-generation

- You will need an API key which you can get for free here: https://aistudio.google.com/app/apikey?
- Press the Create API Key button on the top right

Create a `.env` file and **add the API key there**, like this:
`GEMINI_API_KEY=your_api_key_here`

Use `gemini-3.8-flash` for generation. To reduce thinking effort and latency,
import `ThinkingLevel` from `@google/genai` and add this to your request:

```js
config: {
  thinkingConfig: {
    thinkingLevel: ThinkingLevel.LOW,
  },
}
```

This model supports low thinking, rather than disabling thinking with `thinkingBudget: 0`.

## Tasks

### 1. Simple LLM Request via API

- Implement the TODO in `main.js`
- Run the script with `node main.js`
- You should see the LLM's response to the prompt printed to the console

### 2. Token tracking

- Add a log showing the input & output tokens used
