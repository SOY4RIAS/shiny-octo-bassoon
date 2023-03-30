import { PropsWithChildren } from "react";
import { Button, Icon } from "@mfe/ui";
interface PromptSectionProps {
  onClear?: () => void;
}

export const PromptSection = ({
  children,
  onClear,
}: PropsWithChildren<PromptSectionProps>) => {
  return (
    <div className="sticky bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent md:bg-gradient-to-t	from-gray-800 pt-2 px-10">
      <div className="flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center">
        <Button onClick={onClear} className="mb-1 lg:mb-0">
          <Icon.Trash />
        </Button>
      </div>
      {children}
    </div>
  );
};
