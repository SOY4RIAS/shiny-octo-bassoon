import cn from "classnames";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "bg-slate-600 bg-opacity-95 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ",
        className
      )}
    />
  );
};
