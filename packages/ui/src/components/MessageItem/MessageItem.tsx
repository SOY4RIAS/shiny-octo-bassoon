import cn from "classnames";
import { Icon } from "../Icon";

interface MessageItemProps {
  from: "user" | "bot";
  text?: string;
  component?: React.ReactNode;
}

export const MessageItem = ({ from, text, component }: MessageItemProps) => {
  return (
    <div
      className={cn(
        "group w-full text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50",
        {
          "dark:bg-gray-800": from === "user",
          "dark:bg-gray-700": from === "bot",
        }
      )}
    >
      <div className="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto">
        {!component && (
          <div className="w-[30px] flex flex-col relative items-end">
            {from === "user" && <Icon.User />}
            {from === "bot" && <Icon.ChatBubble />}
          </div>
        )}
        <div className="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
          <div className="flex flex-grow flex-col gap-3">
            <span className="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap">
              {component || text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
