import React from 'react';

interface AuthHeaderProps {
    title: string;
    subtitle: string;
    className?: string;
}

export const AuthHeader: React.FC<AuthHeaderProps> = ({ 
    title, 
    subtitle, 
    className = 'mb-6' 
}) => {
    return (
        <header className={className}>
            <h1 className="text-3xl font-bold text-gray-900 font-nunito leading-tight">{title}</h1>
            <p className="text-gray-500 font-nunito mt-1">{subtitle}</p>
        </header>
    );
};
