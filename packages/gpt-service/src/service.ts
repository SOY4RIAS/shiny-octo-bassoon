import { Configuration, OpenAIApi } from "openai";
import { API_KEY, MODEL } from "./constants";

const config = new Configuration({ apiKey: API_KEY });

const openai = new OpenAIApi(config);

export const runPrompt = async (prompt: string) => {
  return await openai.createChatCompletion({
    model: MODEL,
    messages: [{ role: "user", content: prompt }],
  });
};

export const getPromptText = (
  response: Awaited<ReturnType<typeof runPrompt>>
) => {
  return response.data.choices[0].message.content;
};
