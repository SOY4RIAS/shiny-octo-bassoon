import { useMutation } from "react-query";
import { getPromptText, runPrompt } from "@mfe/gpt-service";

export const useGPTService = () => {
  const { data, ...props } = useMutation(runPrompt, {});

  return { ...props, data: getPromptText(data) };
};
