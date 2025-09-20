import OpenAI from 'openai';
import { OPENAI_API_KEY } from './constant';

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY, // Your OpenRouter API key
  baseURL: 'https://openrouter.ai/api/v1', // OpenRouter API endpoint
  dangerouslyAllowBrowser: true,
});

export default openai;