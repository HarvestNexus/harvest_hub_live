import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <div className="flex flex-col w-full mb-4">
      <label className="font-semibold text-sm mb-1">{label}</label>
      <input
        {...props}
        className={`border rounded-md px-3 py-2 outline-none focus:ring-2 bg-transparent ${
          error ? "border-red-500 ring-red-200" : "border-gray-300 focus:ring-green-300"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;
