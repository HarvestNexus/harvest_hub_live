import React from 'react';

interface InputFieldProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  className = '',
  error,
}) => {
  return (
    <div className={`flex flex-col space-y-1 ${className}`}>
      <label className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={`appearance-none block w-full px-3 py-2 border ${error ? 'border-red-300' : 'border-gray-300'
          } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm`}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default InputField;