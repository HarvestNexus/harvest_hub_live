import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../store/authStore';
import InputField from '../../../components/common/InputField';
import { Button } from '../../../components/common/Button';
import { AuthHeader } from '../../../components/common/AuthHeader';
import { AuthFooter } from '../../../components/common/AuthFooter';
import { AuthError } from '../../../components/common/AuthError';

export const Content: React.FC = () => {
    const navigate = useNavigate();
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [error_field, setErrorField] = useState('');

    const { forgotPassword, isLoading, error, clearError } = useAuthStore();

    const validate = () => {
        let isValid = true;
        if (!emailOrPhone) {
            setErrorField('Oops! Please enter a valid email addres');
            isValid = false;
        } else {
            const isEmail = /\S+@\S+\.\S+/.test(emailOrPhone);
            const isPhone = /^\+?[\d\s-]{10,}$/.test(emailOrPhone);
            if (!isEmail && !isPhone) {
                setErrorField('Oops! Please enter a valid email addres');
                isValid = false;
            }
        }
        return isValid;
    };

    const handleBlur = () => {
        validate();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        clearError();
        setErrorField('');
        
        if (!validate()) return;

        const success = await forgotPassword({ emailOrPhone });
        if (success) {
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
        }
    };

    return (
        <div className="md:h-full w-full">
            <AuthHeader 
                title="Forget Password" 
                subtitle="Enter your email or phone number to reset your password" 
            />
            <div className="w-full space-y-8 mt-4">
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <AuthError message={error || ''} />

                    <InputField
                        label="Email or Phone Number"
                        value={emailOrPhone}
                        onChange={(val) => {
                            setEmailOrPhone(val);
                            if (error_field) setErrorField('');
                            if (error) clearError();
                        }}
                        onBlur={handleBlur}
                        placeholder="Enter your email or phone number"
                        error={error_field}
                        required
                    />

                    <Button type="submit" loading={isLoading}>
                        Send Reset Code
                    </Button>
                </form>

                <AuthFooter 
                    message="Remember your password?" 
                    actionText="Login"
                    onActionClick={() => navigate('/login')}
                />
            </div>
        </div>
    );
};