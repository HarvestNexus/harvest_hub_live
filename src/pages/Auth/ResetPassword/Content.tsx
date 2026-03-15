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
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [success, setSuccess] = useState(false);

    const { resetPassword, isLoading, error, clearError } = useAuthStore();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        clearError();
        
        const newErrors: Record<string, string> = {};
        
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        } else if (!/[A-Z]/.test(formData.password)) {
            newErrors.password = 'Password must contain at least one uppercase letter';
        } else if (!/\d/.test(formData.password)) {
            newErrors.password = 'Password must contain at least one number';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const success = await resetPassword({ 
            emailOrPhone: '', // This should be provided from context/state
            password: formData.password 
        });

        if (success) {
            setSuccess(true);
            setTimeout(() => {
                navigate('/login');
            }, 3000);
        }
    };

    const handleBlur = (field: string) => {
        const newErrors = { ...errors };
        if (field === 'password') {
            if (!formData.password) {
                newErrors.password = 'Password is required';
            } else if (formData.password.length < 6) {
                newErrors.password = 'Password must be at least 6 characters';
            } else if (!/[A-Z]/.test(formData.password)) {
                newErrors.password = 'Password must contain at least one uppercase letter';
            } else if (!/\d/.test(formData.password)) {
                newErrors.password = 'Password must contain at least one number';
            } else {
                delete newErrors.password;
            }
        } else if (field === 'confirmPassword') {
            if (!formData.confirmPassword) {
                newErrors.confirmPassword = 'Please confirm your password';
            } else if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = 'Passwords do not match';
            } else {
                delete newErrors.confirmPassword;
            }
        }
        setErrors(newErrors);
    };

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));

        // Clear field error when user starts typing
        if (errors[field]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }

        if (error) clearError();
    };

    if (success) {
        return (
            <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center shadow-sm">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-2 font-nunito">Great!</h3>
                        <p className="text-gray-600 mb-6 font-nunito">
                            Your password has been changed successfully.
                        </p>

                        <Button onClick={() => navigate('/login')} className="w-full">
                            Return to Login
                        </Button>

                        <p className="text-sm text-gray-500 mt-4 font-nunito">
                            Redirecting to login page in 3 seconds...
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="md:h-full w-full">
            <AuthHeader 
                title="Set New Password" 
                subtitle="Enter your new password to secure your account" 
            />
            <div className="w-full space-y-8">
                <form onSubmit={handleSubmit} className='space-y-6 font-nunito'>
                    <div className="space-y-6">
                        <InputField
                            label="New Password"
                            type="password"
                            value={formData.password}
                            onChange={(value) => handleChange('password', value)}
                            onBlur={() => handleBlur('password')}
                            placeholder="Enter new password"
                            error={errors.password}
                            required
                        />

                        <InputField
                            label="Confirm New Password"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={(value) => handleChange('confirmPassword', value)}
                            onBlur={() => handleBlur('confirmPassword')}
                            placeholder="Confirm new password"
                            error={errors.confirmPassword}
                            required
                        />

                        {/* API Error Display */}
                        <AuthError message={error || ''} />

                        <Button type="submit" loading={isLoading}>
                            Reset Password
                        </Button>
                    </div>
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