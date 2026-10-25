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

Use `gemini-3.5-flash-lite` for these exercises. Leave `thinkingConfig` unset to
use its default minimal thinking; minimal thinking can still use thinking tokens.

If you run out of Flash-Lite usage, you can also try `gemini-3.8-flash` with the
same Gemini API key, but it can be slower. Availability and quotas depend on your
account; switching models may not bypass shared limits. Check your current
[Gemini API limits](https://ai.google.dev/gemini-api/docs/rate-limits).

### Other API providers

You can also try these providers. Use the provider's own API key and adapt the
request wrapper to its endpoint or SDK.

| Provider | Free offering |
| --- | --- |
| [**Mistral**](https://docs.mistral.ai/getting-started/quickstarts/studio/activate-and-generate-api-key) | Free API mode, **no credit card required**. Usage quotas are shown in the account dashboard. |
| [**Groq**](https://console.groq.com/docs/rate-limits) | For `qwen/qwen3.8-27b`: **30 requests/minute, 1,000/day, 8,000 tokens/minute**, subject to account limits. |
| [**OpenRouter**](https://openrouter.ai/pricing) | Free models, **50 requests/day** without purchasing credits. |

Free-tier limits can change; check the linked provider pages and your account dashboard.

## Tasks

### 1. Simple LLM Request via API

- Implement the TODOs in `main.js`
- Run the script with `node main.js`
- You should see the LLM's response to the prompt printed to the console

### 2. Token tracking

- Add a log showing the input & output tokens used
