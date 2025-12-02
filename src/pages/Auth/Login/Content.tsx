import React, { useState } from 'react';
import { useAuthStore } from '../../../store/authStore';
import InputField from '../../../components/common/InputField';
import { Button } from '../../../components/common/Button';
import { useNavigate } from 'react-router-dom';
import googleIcon from '../../../assets/google-icon.svg';
import appleIcon from '../../../assets/apple-icon.svg';

export const Content: React.FC = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    emailOrPhone: '',
    password: '',
  });

  const { login, isLoading, error, clearError } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    await login(credentials);
  };

  const handleChange = (field: string, value: string) => {
    setCredentials(prev => ({ ...prev, [field]: value }));
    if (error) clearError();
  };

  return (
    <div className="h-full w-full p-4 lg:p-6">
      <div>
        <h1 className='leading-160 text-darkgrey text-[45px] text-center'>Login</h1>
        <p className='text-center text-lightgrey lg:text-lg leading-160'>Welcome back! Please login to your account.</p>
      </div>
      <div className="w-full space-y-8 mt-4 lg:mt-[54px]">
        <form className="mt-8 space-y-6 max-w-lg mx-auto" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <InputField
            label="Email or Phone Number"
            type="text"
            value={credentials.emailOrPhone}
            onChange={(value) => handleChange('emailOrPhone', value)}
            placeholder="Enter your email or phone number"
            required
          />

          <InputField
            label="Password"
            type="password"
            value={credentials.password}
            onChange={(value) => handleChange('password', value)}
            placeholder="Enter your password"
            required
          />

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
          <div className="flex items-center justify-center space-x-4">
            <hr className="border border-lightgrey flex-grow" />
            <p className="text-lightgrey w-max">Or login with</p>
            <hr className="border border-lightgrey flex-grow" />
          </div>
          <div className="flex items-center justify-center space-x-4 lg:space-x-7 mt-12">
            <button className='rounded-[10px] p-3 flex items-center gap-2 w-1/2 border border-lightgrey justify-center'>
              <img src={appleIcon} alt="apple-icon" className="size-6" />
              <span>Apple</span>
            </button>
            <button className='rounded-[10px] p-3 flex items-center gap-2 w-1/2 border border-lightgrey justify-center'>
              <img src={googleIcon} alt="google-icon" className="size-6" />
              <span>Google</span>
            </button>
          </div>
          <div className="text-center">
            <span className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button
                type="button"
                className="text-green-600 hover:text-green-500 font-medium"
                onClick={() => navigate('/register')}
              >
                Sign up
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};