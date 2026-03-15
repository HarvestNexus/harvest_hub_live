import React, { useState } from 'react';
import { useAuthStore } from '../../../store/authStore';
import InputField from '../../../components/common/InputField';
import { Button } from '../../../components/common/Button';
import { SocialAuthButtons } from '../../../components/common/SocialAuthButtons';
import { AuthFooter } from '../../../components/common/AuthFooter';
import { AuthHeader } from '../../../components/common/AuthHeader';
import { AuthError } from '../../../components/common/AuthError';
import { useNavigate } from 'react-router-dom';

export const Content: React.FC = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    emailOrPhone: '',
    password: '',
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const { login, isLoading, error, clearError } = useAuthStore();

  const validateField = (field: string, value: string) => {
    let errorMsg = '';
    if (field === 'emailOrPhone') {
      if (!value) {
        errorMsg = 'Email or Phone Number is required';
      } else {
        const isEmail = /\S+@\S+\.\S+/.test(value);
        const isPhone = /^\+?[\d\s-]{10,}$/.test(value);
        if (!isEmail && !isPhone) {
          errorMsg = 'Please enter a valid email or phone number';
        }
      }
    } else if (field === 'password') {
      if (!value) errorMsg = 'Password is required';
    }
    return errorMsg;
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    Object.keys(credentials).forEach(key => {
      const errorMsg = validateField(key, (credentials as any)[key]);
      if (errorMsg) newErrors[key] = errorMsg;
    });

    setFieldErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: string) => {
    const errorMsg = validateField(field, (credentials as any)[field]);
    setFieldErrors(prev => ({ ...prev, [field]: errorMsg }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    setFieldErrors({});

    if (validate()) {
      await login(credentials);
    }
  };

  const handleChange = (field: string, value: string) => {
    setCredentials(prev => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors(prev => ({ ...prev, [field]: '' }));
    }
    if (error) clearError();
  };

  return (
    <div className="md:h-full w-full space-y-8">
      <AuthHeader 
        title="Welcome Back!" 
        subtitle="Please login into your account to continue where you left off."
      />
      <div className="w-full">
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <AuthError message={error || ''} />

          <InputField
            label="Email or Phone Number"
            type="text"
            value={credentials.emailOrPhone}
            onChange={(value) => handleChange('emailOrPhone', value)}
            onBlur={() => handleBlur('emailOrPhone')}
            placeholder="Enter your email or phone number"
            error={fieldErrors.emailOrPhone}
            required
          />

          <InputField
            label="Password"
            type="password"
            value={credentials.password}
            onChange={(value) => handleChange('password', value)}
            onBlur={() => handleBlur('password')}
            placeholder="Enter your password"
            error={fieldErrors.password}
            required
          />
          <div className='space-y-1.5'>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember" className="text-sm text-lightgrey">Remember me</label>
              </div>
              <button
                type="button"
                className="text-sm text-green-600 hover:text-green-500"
                onClick={() => navigate('/forget-password')}
              >
                Forgot your password?
              </button>
            </div>

            <Button type="submit" loading={isLoading}>
              Sign In
            </Button>
          </div>
          
        </form>

        <div className="max-w-lg mx-auto mt-6">
          <SocialAuthButtons googleLabel="Google" appleLabel="Apple" />

          <AuthFooter 
            message="Don't have an account?"
            actionText="Sign up"
            onActionClick={() => navigate('/signup')}
            className="mt-6"
          />
        </div>
      </div>
    </div>
  );
};
