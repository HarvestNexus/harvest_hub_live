import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../store/authStore';
import InputField from '../../../components/common/InputField';
import { Button } from '../../../components/common/Button';

export const Content: React.FC = () => {
    const navigate = useNavigate();
    const [emailOrPhone, setEmailOrPhone] = useState('');

    const { forgotPassword, isLoading, error, clearError } = useAuthStore();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        clearError();
        await forgotPassword({ emailOrPhone });
        // Navigate to verify code with email parameter
        navigate('/verify-code', {
            state: {
                emailOrPhone,
                userType: 'Farmer',
                title: 'Reset Your Password',
                description: 'Please enter the 5-digit code we sent to reset your password',
                redirectTo: '/reset-password',
                isReset: true
            }
        });
    };

    return (
        <div className="h-full w-full p-4 lg:p-6">
            <div>
                <h1 className='leading-160 text-darkgrey text-[45px] text-center'>Forget Password</h1>
                <p className='text-center text-lightgrey lg:text-base leading-160'>Enter your email or phone number to reset your password</p>
            </div>
            <div className="w-full space-y-8 mt-4 lg:mt-[54px]">
                <form onSubmit={handleSubmit} className='space-y-6 max-w-lg mx-auto'>
                    {error && (
                        <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                            {error}
                        </div>
                    )}

                    <InputField
                        label="Email or Phone Number"
                        value={emailOrPhone}
                        onChange={setEmailOrPhone}
                        placeholder="Enter your email or phone number"
                        required
                    />

                    <Button type="submit" loading={isLoading}>
                        Send Reset Code
                    </Button>
                </form>

                <div className="text-center space-x-1.5 flex items-center justify-center text-sm">
                    <span className='text-lightgrey'>Remember your password?</span>
                    <button
                        type="button"
                        onClick={() => navigate('/login')}
                        className="text-green-600 hover:text-green-500 font-medium"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};