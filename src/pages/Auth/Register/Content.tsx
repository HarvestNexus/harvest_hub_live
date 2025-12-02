import React, { useState } from 'react';
import { useAuthStore } from '../../../store/authStore';
import InputField from '../../../components/common/InputField';
import { Button } from '../../../components/common/Button';
import { type SignupCredentials } from '../../../interfaces/auth.interface';

export const Content: React.FC = () => {
    const [step, setStep] = useState<'basic' | 'role'>('basic');
    const [formData, setFormData] = useState<Partial<SignupCredentials>>({
        role: undefined,
    });

    const { signup, isLoading, error, clearError } = useAuthStore();

    const commonFields = [
        { key: 'fullName', label: 'Full Name', placeholder: 'Enter your full name' },
        { key: 'emailOrPhone', label: 'Email or Phone Number', placeholder: 'Enter your email or phone number' },
        { key: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
    ];

    const roleSpecificFields = {
        farmer: [
            { key: 'farmLocation', label: 'Farm Location', placeholder: 'Enter your farm location' },
            { key: 'cropType', label: 'Crop Type', placeholder: 'Select crop type' },
        ],
        buyer: [],
        logistics: [
            { key: 'companyName', label: 'Company Name', placeholder: 'Enter your company name' },
            { key: 'vehicleType', label: 'Vehicle Type', placeholder: 'Enter your vehicle type' },
            { key: 'vehicleCapacity', label: 'Vehicle Capacity', placeholder: 'Enter your vehicle capacity' },
            { key: 'serviceArea', label: 'Service Area', placeholder: 'Enter the area' },
        ],
    };

    const handleBasicSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep('role');
    };

    const handleRoleSelect = (role: 'farmer' | 'buyer' | 'logistics') => {
        setFormData(prev => ({ ...prev, role }));
    };

    const handleFinalSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        clearError();
        if (formData.role && formData.fullName && formData.emailOrPhone && formData.password) {
            await signup(formData as SignupCredentials);
        }
    };

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (error) clearError();
    };

    const getRoleDescription = (role: string) => {
        const descriptions = {
            farmer: 'Sign up to start storing and selling directly to buyers.',
            buyer: 'Sign up to get fresh produce directly from farmers.',
            logistics: 'Sign up to start receiving delivery requests, manage your fleet, and earn.',
        };
        return descriptions[role as keyof typeof descriptions];
    };

    return (
        <div className="h-full w-full p-4 lg:p-6">
            <div>
                <h1 className='leading-160 text-darkgrey text-[45px] text-center'>Create Your Account</h1>
                <p className='text-center'>Sign up to start storing and selling directly to buyers.</p>
            </div>
            <div className="w-full mt-8 lg:mt-[54px]">
                <div className='space-y-6 max-w-lg mx-auto'>
                    {step === 'basic' && (
                        <form onSubmit={handleBasicSubmit} className=''>
                            <div className="space-y-4">
                                {commonFields.map(field => (
                                    <InputField
                                        key={field.key}
                                        label={field.label}
                                        type={field.type as any}
                                        value={formData[field.key as keyof SignupCredentials] || ''}
                                        onChange={(value) => handleChange(field.key, value)}
                                        placeholder={field.placeholder}
                                        required
                                    />
                                ))}

                                <Button type="submit">
                                    Continue
                                </Button>
                            </div>
                        </form>
                    )}

                    {step === 'role' && !formData.role && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-medium text-gray-900 text-center">
                                Select Your Role
                            </h3>

                            {(['farmer', 'buyer', 'logistics'] as const).map(role => (
                                <div
                                    key={role}
                                    className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-green-500 transition-colors"
                                    onClick={() => handleRoleSelect(role)}
                                >
                                    <h4 className="font-medium text-gray-900 capitalize">
                                        {role}
                                    </h4>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {getRoleDescription(role)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    {step === 'role' && formData.role && (
                        <form onSubmit={handleFinalSubmit}>
                            <div className="space-y-4">
                                <p className="text-sm text-gray-600 mb-4">
                                    {getRoleDescription(formData.role)}
                                </p>

                                {roleSpecificFields[formData.role].map(field => (
                                    <InputField
                                        key={field.key}
                                        label={field.label}
                                        value={formData[field.key as keyof SignupCredentials] || ''}
                                        onChange={(value) => handleChange(field.key, value)}
                                        placeholder={field.placeholder}
                                        required
                                    />
                                ))}

                                {error && (
                                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                                        {error}
                                    </div>
                                )}

                                <div className="flex space-x-3">
                                    <Button
                                        type="button"
                                        variant="secondary"
                                        onClick={() => setFormData(prev => ({ ...prev, role: undefined }))}
                                    >
                                        Back
                                    </Button>
                                    <Button type="submit" loading={isLoading}>
                                        Create Account
                                    </Button>
                                </div>
                            </div>
                        </form>
                    )}

                    <div className="text-center">
                        <span className="text-sm text-gray-600">
                            Already have an account?{' '}
                            <button
                                type="button"
                                className="text-green-600 hover:text-green-500 font-medium"
                                onClick={() => {/* Navigate to login */ }}
                            >
                                Login
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};