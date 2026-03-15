import React from 'react';

interface AuthErrorProps {
    message: string;
    className?: string;
}

export const AuthError: React.FC<AuthErrorProps> = ({ message, className = '' }) => {
    if (!message) return null;

    return (
        <div className={`bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg font-nunito text-sm mb-6 ${className}`}>
            {message}
        </div>
    );
};
