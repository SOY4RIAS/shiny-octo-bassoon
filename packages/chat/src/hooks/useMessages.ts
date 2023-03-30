import { useEffect, useState } from "react";

export const useMessages = () => {
  const [messages, setMessagesState] = useState(() => {
    const localMessages = localStorage.getItem("messages");
    return localMessages ? JSON.parse(localMessages) : [];
  });

  const setMessage = (from: "user" | "bot", text: string) => {
    setMessagesState((messages) => [...messages, { from, text }]);
  };

  const clearMessages = () => {
    setMessagesState([]);
  };

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  return { messages, setMessage, clearMessages };
};
