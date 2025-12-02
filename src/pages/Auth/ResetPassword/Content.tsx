import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../store/authStore';
import InputField from '../../../components/common/InputField';
import { Button } from '../../../components/common/Button';

export const Content: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [success, setSuccess] = useState(false);

    const { resetPassword, isLoading, error, clearError } = useAuthStore();

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        clearError();

        if (validateForm()) {
            await resetPassword({
                newPassword: formData.password,
                confirmPassword: formData.confirmPassword
            });

            if (!error) {
                setSuccess(true);

                // Redirect to login after 3 seconds
                setTimeout(() => {
                    navigate('/login', {
                        state: { message: 'Password reset successful! Please login with your new password.' }
                    });
                }, 3000);
            }
        }
    };

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));

        // Clear field error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }

        if (error) clearError();
    };

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Great!</h3>
                        <p className="text-gray-600 mb-6">
                            Your password has been changed successfully.
                        </p>

                        <Button onClick={() => navigate('/login')}>
                            Return to Login
                        </Button>

                        <p className="text-sm text-gray-500 mt-4">
                            Redirecting to login page in 3 seconds...
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full w-full p-4 lg:p-6">
            <div className="w-full space-y-8">
                <div>
                    <h1 className='leading-160 text-darkgrey text-[45px] text-center'>Reset Password</h1>
                    <p className='text-center text-lightgrey lg:text-base leading-160'>Enter your email or phone number to reset your password</p>
                </div>
                <div className="w-full space-y-8 mt-4 lg:mt-[54px]">
                    <form onSubmit={handleSubmit} className='space-y-6 max-w-lg mx-auto'>
                        <div className="space-y-4">
                            <InputField
                                label="New Password"
                                type="password"
                                value={formData.password}
                                onChange={(value) => handleChange('password', value)}
                                placeholder="Enter new password"
                                error={errors.password}
                                required
                            />

                            <InputField
                                label="Confirm New Password"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={(value) => handleChange('confirmPassword', value)}
                                placeholder="Confirm new password"
                                error={errors.confirmPassword}
                                required
                            />

                            <div className="text-sm text-gray-500 mb-4">
                                <p>Password must contain:</p>
                                <ul className="list-disc pl-5 mt-1 space-y-1">
                                    <li className={formData.password.length >= 6 ? 'text-green-600' : ''}>
                                        At least 6 characters
                                    </li>
                                    <li className={/[A-Z]/.test(formData.password) ? 'text-green-600' : ''}>
                                        One uppercase letter
                                    </li>
                                    <li className={/\d/.test(formData.password) ? 'text-green-600' : ''}>
                                        One number
                                    </li>
                                </ul>
                            </div>

                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                                    {error}
                                </div>
                            )}

                            <Button type="submit" loading={isLoading}>
                                Reset Password
                            </Button>
                        </div>
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
        </div>
    );
};