import { PropsWithChildren, useEffect, useState } from "react";

import { Field, Icon, Loading, MessageItem } from "@mfe/ui";
import { useGPTService } from "../../hooks/useGPTService";
import { useMessages } from "../../hooks/useMessages";

interface Message {
  from: "user" | "bot";
  text: string;
}

export const Container = () => {
  const [prompt, setPrompt] = useState<string>();
  const { messages, setMessage } = useMessages();
  const { mutateAsync: runPrompt, isLoading } = useGPTService();

  const handlePrompt = () => {
    setMessage("user", prompt);
    runPrompt(prompt).then((res) => {
      setMessage("bot", res.data.choices[0].message.content);
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
        </div>
        {isLoading && <MessageItem from="bot" component={<Loading />} />}
      </div>
      <div className="sticky bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent md:bg-gradient-to-t	from-gray-800 pt-2 px-20">
        <Field
          type="text"
          onChange={(e) => setPrompt(e.currentTarget.value)}
          placeholder="Enter a prompt"
          onKeyDown={(e) => {
            e.key === "Enter" && handlePrompt();
          }}
          value={prompt}
        />
      </div>
    </>
  );
};
