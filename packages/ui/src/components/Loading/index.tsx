import { Icon } from "../Icon";

export const Loading = () => {
  return (
    <div className="animate-pulse w-full flex flex-row justify-center">
      <Icon.Search className="mr-2 animate-spin" />
      Loading...
    </div>
  );
};
