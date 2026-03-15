import React from 'react';
import googleIcon from '../../assets/google-icon.svg';
import appleIcon from '../../assets/apple-icon.svg';

interface SocialAuthButtonsProps {
    googleLabel?: string;
    appleLabel?: string;
    className?: string;
}

export const SocialAuthButtons: React.FC<SocialAuthButtonsProps> = ({
    googleLabel = 'Sign up with Google',
    appleLabel = 'Sign up with Apple',
    className = '',
}) => {
    return (
        <div className={`space-y-6 ${className}`}>
            <div className="relative flex items-center justify-center">
                <div className="flex-grow border-t border-gray-100"></div>
                <span className="flex-shrink mx-4 text-xs font-bold text-green-600 uppercase tracking-widest">OR</span>
                <div className="flex-grow border-t border-gray-100"></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <button type="button" className="flex-1 flex items-center justify-center gap-3 px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                    <img src={appleIcon} alt="Apple" className="w-5 h-5" />
                    <span className="text-sm font-medium text-gray-700">{appleLabel}</span>
                </button>
                <button type="button" className="flex-1 flex items-center justify-center gap-3 px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                    <img src={googleIcon} alt="Google" className="w-5 h-5" />
                    <span className="text-sm font-medium text-gray-700">{googleLabel}</span>
                </button>
            </div>
        </div>
    );
};
