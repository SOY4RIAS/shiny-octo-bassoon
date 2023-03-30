interface FieldProps {
  label: string;
  type: string;
}

export const Field = ({ label, type }: FieldProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        type={type}
      />
    </div>
  );
};
