import React, { useState } from 'react';
import { useAuthStore } from '../../../store/authStore';
import InputField from '../../../components/common/InputField';
import { Button } from '../../../components/common/Button';
import { SocialAuthButtons } from '../../../components/common/SocialAuthButtons';
import { AuthFooter } from '../../../components/common/AuthFooter';
import { AuthHeader } from '../../../components/common/AuthHeader';
import { AuthError } from '../../../components/common/AuthError';
import { type SignupCredentials } from '../../../interfaces/auth.interface';
import { useNavigate } from 'react-router-dom';
import { 
    Users, 
    ShoppingCart, 
    Truck, 
    Warehouse, 
    ChevronDown 
} from 'lucide-react';

type Role = 'farmer' | 'buyer' | 'logistics' | 'facility';

interface ContentProps {
    step: 1 | 2 | 3 | 4;
    setStep: (step: 1 | 2 | 3 | 4) => void;
}

export const Content: React.FC<ContentProps> = ({ step, setStep }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<Partial<SignupCredentials>>({
        fullName: '',
        emailOrPhone: '',
        password: '',
        role: undefined,
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const { signup, isLoading, error: apiError, clearError } = useAuthStore();

    const validateField = (field: string, value: any) => {
        let errorMsg = '';
        if (field === 'fullName') {
            if (!value) errorMsg = 'Full name is required';
        } else if (field === 'emailOrPhone') {
            if (!value) {
                errorMsg = 'Oops! Please enter a valid email addres';
            } else {
                const isEmail = /\S+@\S+\.\S+/.test(value);
                const isPhone = /^\+?[\d\s-]{10,}$/.test(value);
                if (!isEmail && !isPhone) {
                    errorMsg = 'Oops! Please enter a valid email addres';
                }
            }
        } else if (field === 'role') {
            if (!value) errorMsg = 'Please select your role';
        } else if (['farmLocation', 'cropType', 'vehicleType', 'vehicleCapacity', 'serviceArea', 'facilityName', 'facilityLocation', 'facilityCapacity'].includes(field)) {
            if (!value) errorMsg = `${field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} is required`;
        } else if (field === 'password') {
            if (!value || value.length < 6) {
                errorMsg = 'Password must be at least 6 characters long!';
            }
        }
        return errorMsg;
    };

    const validateStep = (s: number) => {
        const newErrors: Record<string, string> = {};
        if (s === 2) {
            newErrors.fullName = validateField('fullName', formData.fullName);
            newErrors.emailOrPhone = validateField('emailOrPhone', formData.emailOrPhone);
        } else if (s === 3) {
            if (!formData.role) {
                newErrors.role = validateField('role', '');
            } else {
                if (formData.role === 'farmer') {
                    newErrors.farmLocation = validateField('farmLocation', formData.farmLocation);
                    newErrors.cropType = validateField('cropType', formData.cropType);
                } else if (formData.role === 'logistics') {
                    newErrors.vehicleType = validateField('vehicleType', formData.vehicleType);
                    newErrors.vehicleCapacity = validateField('vehicleCapacity', formData.vehicleCapacity);
                    newErrors.serviceArea = validateField('serviceArea', formData.serviceArea);
                } else if (formData.role === 'facility') {
                    newErrors.facilityName = validateField('facilityName', formData.facilityName);
                    newErrors.facilityLocation = validateField('facilityLocation', formData.facilityLocation);
                    newErrors.facilityCapacity = validateField('facilityCapacity', formData.facilityCapacity);
                }
            }
        } else if (s === 4) {
            newErrors.password = validateField('password', formData.password);
        }

        const filteredErrors: Record<string, string> = {};
        Object.keys(newErrors).forEach(key => {
            if (newErrors[key]) filteredErrors[key] = newErrors[key];
        });

        setErrors(filteredErrors);
        return Object.keys(filteredErrors).length === 0;
    };

    const handleBlur = (field: string) => {
        const errorMsg = validateField(field, (formData as any)[field]);
        if (errorMsg) {
            setErrors(prev => ({ ...prev, [field]: errorMsg }));
        } else {
            setErrors(prev => {
                const newErrs = { ...prev };
                delete newErrs[field];
                return newErrs;
            });
        }
    };

    const handleNext = () => {
        if (validateStep(step)) {
            setStep((step + 1) as 1 | 2 | 3 | 4);
        }
    };

    const handleBack = () => setStep((step - 1) as 1 | 2 | 3 | 4);

    const handleRoleSelect = (role: Role) => {
        setFormData(prev => ({ ...prev, role }));
        if (errors.role) setErrors(prev => ({ ...prev, role: '' }));
    };

    const handleChange = (field: keyof SignupCredentials, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
        if (apiError) clearError();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        clearError();
        if (validateStep(4)) {
            await signup(formData as SignupCredentials);
        }
    };

    const roles = [
        {
            id: 'farmer' as Role,
            title: 'Farmer',
            description: 'As a farmer, book Storage and sell to buyers directly.',
            icon: Users,
            color: 'bg-green-50 text-green-600',
        },
        {
            id: 'buyer' as Role,
            title: 'Buyer',
            description: 'Buy fresh produce directly from farmers.',
            icon: ShoppingCart,
            color: 'bg-green-50 text-green-600',
        },
        {
            id: 'logistics' as Role,
            title: 'Logistics',
            description: 'Move produce between farms, buyers, and storage.',
            icon: Truck,
            color: 'bg-green-50 text-green-600',
        },
        {
            id: 'facility' as Role,
            title: 'Storage Facilities',
            description: 'Store farm produce safely to reduce spoilage and waste.',
            icon: Warehouse,
            color: 'bg-green-50 text-green-600',
        }
    ];

    const renderProgressBar = () => (
        <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 flex gap-2">
                {[2, 3, 4].map((s) => (
                    <button
                        key={s}
                        type="button"
                        onClick={() => s < step && setStep(s as 1 | 2 | 3 | 4)}
                        disabled={s >= step}
                        className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                            s <= step ? 'bg-green-600' : 'bg-gray-100'
                        } ${s < step ? 'cursor-pointer hover:bg-green-700' : 'cursor-default'}`}
                    />
                ))}
            </div>
            <span className="text-sm font-medium text-gray-400 whitespace-nowrap">
                {step - 1} of 3
            </span>
        </div>
    );

    const renderFooter = () => (
        <AuthFooter 
            message="Already have an account?"
            actionText="Login"
            onActionClick={() => navigate('/login')}
        />
    );

    return (
        <div className="w-full md:h-full">
            <AuthHeader 
                title="Create Your Account" 
                subtitle="Let’s get you set up in just few steps" 
            />

            {step > 1 && renderProgressBar()}

            <main>
                {step === 1 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                        <AuthError message={apiError || ''} />
                        <Button 
                            onClick={() => setStep(2)} 
                            className="w-full"
                        >
                            Sign Up with Email
                        </Button>
                        <SocialAuthButtons />
                    </div>
                )}

                {step === 2 && (
                    <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="space-y-6 transition-all animate-in fade-in slide-in-from-right-4">
                        <InputField
                            label="Full Name"
                            placeholder="Enter your full name or company name"
                            value={formData.fullName || ''}
                            onChange={(v) => handleChange('fullName', v)}
                            onBlur={() => handleBlur('fullName')}
                            error={errors.fullName}
                            required
                        />
                        <InputField
                            label="Email or Phone Number"
                            placeholder="Enter your email or phone number"
                            value={formData.emailOrPhone || ''}
                            onChange={(v) => handleChange('emailOrPhone', v)}
                            onBlur={() => handleBlur('emailOrPhone')}
                            error={errors.emailOrPhone}
                            required
                        />
                        <Button type="submit" className="w-full">
                            continue
                        </Button>
                    </form>
                )}

                {step === 3 && (
                    <div className="space-y-5 transition-all animate-in fade-in slide-in-from-right-4">
                        {!formData.role ? (
                            <>
                                <div>
                                    <p className="text-gray-500 text-sm mt-1">Select your primary role to personalize your experience</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {roles.map((role) => (
                                        <button
                                            key={role.id}
                                            type="button"
                                            onClick={() => handleRoleSelect(role.id)}
                                            className={`flex flex-col items-start p-3 rounded-2xl border transition-all duration-300 text-left group
                                                ${formData.role === role.id ? 'border-green-600 bg-green-50' : 'border-gray-100 hover:border-green-200 hover:bg-gray-50'}
                                            `}
                                        >
                                            <div className={`p-2.5 rounded-xl mb-4 group-hover:scale-110 transition-transform ${role.color}`}>
                                                <role.icon size={20} strokeWidth={2.5} />
                                            </div>
                                            <h3 className="font-bold text-gray-900 mb-1">{role.title}</h3>
                                            <p className="text-xs text-gray-500 leading-relaxed font-nunito">{role.description}</p>
                                        </button>
                                    ))}
                                </div>
                                {errors.role && <p className="text-sm text-red-600 mt-1">{errors.role}</p>}
                                
                                <div className="pt-2">
                                    <Button 
                                        type="button" 
                                        variant="secondary" 
                                        onClick={handleBack}
                                        className="w-full"
                                    >
                                        Back
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <div className="space-y-6 animate-in fade-in slide-in-from-top-4">
                                <div className="flex items-baseline justify-between">
                                    <h3 className="font-bold text-xl text-gray-900 font-nunito">Tell us about your {formData.role === 'facility' ? 'storage service' : formData.role}</h3>
                                    <button 
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, role: undefined }))}
                                        className="text-sm text-green-600 font-semibold hover:underline"
                                    >
                                        Change Role
                                    </button>
                                </div>
                                
                                <div className="space-y-6">
                                    {formData.role === 'farmer' && (
                                        <>
                                            <InputField
                                                label="Farm Location"
                                                placeholder="Enter your farm location"
                                                value={formData.farmLocation || ''}
                                                onChange={(v) => handleChange('farmLocation', v)}
                                                onBlur={() => handleBlur('farmLocation')}
                                                error={errors.farmLocation}
                                                required
                                            />
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-semibold text-gray-700">Crop Type</label>
                                                <div className="relative">
                                                    <select 
                                                        className={`w-full px-4 py-3 bg-white border ${errors.cropType ? 'border-red-300' : 'border-gray-200'} rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-green-500/20 text-gray-600 font-nunito`}
                                                        value={formData.cropType || ''}
                                                        onChange={(e) => handleChange('cropType', e.target.value)}
                                                        required
                                                    >
                                                        <option value="">Select crop type</option>
                                                        <option value="grains">Grains</option>
                                                        <option value="vegetables">Vegetables</option>
                                                        <option value="fruits">Fruits</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                                </div>
                                                {errors.cropType && <p className="text-xs text-red-600">{errors.cropType}</p>}
                                            </div>
                                        </>
                                    )}

                                    {formData.role === 'logistics' && (
                                        <>
                                            <InputField
                                                label="Vehicle Type"
                                                placeholder="Enter your vehicle type"
                                                value={formData.vehicleType || ''}
                                                onChange={(v) => handleChange('vehicleType', v)}
                                                onBlur={() => handleBlur('vehicleType')}
                                                error={errors.vehicleType}
                                                required
                                            />
                                            <InputField
                                                label="Vehicle Capacity"
                                                placeholder="Enter your vehicle capacity"
                                                value={formData.vehicleCapacity || ''}
                                                onChange={(v) => handleChange('vehicleCapacity', v)}
                                                onBlur={() => handleBlur('vehicleCapacity')}
                                                error={errors.vehicleCapacity}
                                                required
                                            />
                                            <InputField
                                                label="Service Area"
                                                placeholder="What area do you operate in"
                                                value={formData.serviceArea || ''}
                                                onChange={(v) => handleChange('serviceArea', v)}
                                                onBlur={() => handleBlur('serviceArea')}
                                                error={errors.serviceArea}
                                                required
                                            />
                                        </>
                                    )}

                                    {formData.role === 'facility' && (
                                        <>
                                            <InputField
                                                label="Facility Name"
                                                placeholder="Enter facility name"
                                                value={formData.facilityName || ''}
                                                onChange={(v) => handleChange('facilityName', v)}
                                                onBlur={() => handleBlur('facilityName')}
                                                error={errors.facilityName}
                                                required
                                            />
                                            <InputField
                                                label="Facility Location"
                                                placeholder="Enter facility location"
                                                value={formData.facilityLocation || ''}
                                                onChange={(v) => handleChange('facilityLocation', v)}
                                                onBlur={() => handleBlur('facilityLocation')}
                                                error={errors.facilityLocation}
                                                required
                                            />
                                            <InputField
                                                label="Facility Capacity"
                                                placeholder="Enter facility capacity"
                                                value={formData.facilityCapacity || ''}
                                                onChange={(v) => handleChange('facilityCapacity', v)}
                                                onBlur={() => handleBlur('facilityCapacity')}
                                                error={errors.facilityCapacity}
                                                required
                                            />
                                        </>
                                    )}

                                    {formData.role === 'buyer' && (
                                        <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                                            <p className="text-sm text-green-700 font-nunito">
                                                As a buyer, you can proceed directly to set your password. No extra details are required at this stage.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="pt-2">
                                    <Button 
                                        type="button" 
                                        onClick={handleNext}
                                        className=""
                                    >
                                        continue
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {step === 4 && (
                    <form onSubmit={handleSubmit} className="space-y-6 transition-all animate-in fade-in slide-in-from-right-4">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 font-nunito">Put in your password</h2>
                            <p className="text-gray-500 text-sm mt-1">Keep your account secure with a strong password</p>
                        </div>

                        <InputField
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            value={formData.password || ''}
                            onChange={(v) => handleChange('password', v)}
                            onBlur={() => handleBlur('password')}
                            error={errors.password}
                            required
                        />

                        <div className="pt-2">
                            <Button 
                                type="submit" 
                                loading={isLoading}
                                className=""
                            >
                                Sign Up
                            </Button>
                        </div>
                        <AuthError message={apiError || ''} className="mt-6" />
                    </form>
                )}
            </main>

            {!(step === 3 && !formData.role) && renderFooter()}
        </div>
    );
};
