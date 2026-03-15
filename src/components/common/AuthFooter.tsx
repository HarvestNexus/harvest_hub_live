import React from 'react';

interface AuthFooterProps {
    message: string;
    actionText: string;
    onActionClick: () => void;
    className?: string;
}

export const AuthFooter: React.FC<AuthFooterProps> = ({
    message,
    actionText,
    onActionClick,
    className = 'mt-8',
}) => {
    return (
        <div className={className}>
            <p className="text-center text-sm text-gray-500 font-nunito">
                {message}{' '}
                <button 
                    type="button"
                    onClick={onActionClick}
                    className="text-green-600 font-semibold hover:underline"
                >
                    {actionText}
                </button>
            </p>
        </div>
    );
};
