import { PropsWithChildren, useEffect, useState } from "react";

import { Field, Icon, Loading, MessageItem } from "@mfe/ui";
import { useGPTService } from "../../hooks/useGPTService";
import { useMessages } from "../../hooks/useMessages";
import { getPromptText } from "@mfe/gpt-service";
import { PromptSection } from "./PromptSection";

interface Message {
  from: "user" | "bot";
  text: string;
}

export const Container = () => {
  const [prompt, setPrompt] = useState<string>();
  const { messages, setMessage, clearMessages } = useMessages();
  const { mutateAsync: runPrompt, isLoading } = useGPTService();

  const handlePrompt = () => {
    setMessage("user", prompt);
    runPrompt(prompt).then((res) => {
      setMessage("bot", getPromptText(res));
    });
    setPrompt("");
  };

  return (
    <>
      <div className="min-h-screen">
        <div className="h-full flex flex-col items-center text-sm dark:bg-gray-800">
          {messages.map((message: Message, index: number) => (
            <MessageItem key={index} {...message} />
          ))}
          {isLoading && <MessageItem from="bot" component={<Loading />} />}
        </div>
      </div>
      <PromptSection onClear={clearMessages}>
        <Field
          type="text"
          onChange={(e) => setPrompt(e.currentTarget.value)}
          placeholder="Enter a prompt"
          onKeyDown={(e) => {
            e.key === "Enter" && handlePrompt();
          }}
          value={prompt}
        />
      </PromptSection>
    </>
  );
};
