import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_REACT_OPENAI_KEY,
});

export const openai = new OpenAIApi(configuration);
