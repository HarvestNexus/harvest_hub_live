import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  loading = false,
  disabled = false,
}) => {
  const baseClasses = "w-full py-3 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";
  const variants = {
    primary: "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variants[variant]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};