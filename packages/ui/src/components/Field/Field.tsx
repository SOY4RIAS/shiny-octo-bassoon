import cn from "classnames";

interface FieldProps extends React.HTMLProps<HTMLInputElement> {
  containerClassname?: string;
  label?: string;
}

export const Field = ({ label, containerClassname, ...props }: FieldProps) => {
  return (
    <div className={cn("flex flex-col", containerClassname)}>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
        <input
          {...props}
          className={cn(
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            props.className
          )}
        />
      </label>
    </div>
  );
};
