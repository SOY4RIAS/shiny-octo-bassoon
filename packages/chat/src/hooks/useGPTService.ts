import { useMutation } from "react-query";
import { runPrompt } from "@mfe/gpt-service";

export const useGPTService = () => {
  const { data, ...props } = useMutation(runPrompt, {});

  return { ...props, data: data?.data.choices[0].message.content };
};
