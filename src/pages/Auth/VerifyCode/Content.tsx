import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../../store/authStore';
import { Button } from '../../../components/common/Button';
import { AuthHeader } from '../../../components/common/AuthHeader';
import { AuthError } from '../../../components/common/AuthError';

interface VerifyCodeProps {
    email?: string;
    userType?: string;
    onSuccess?: (code: string) => void;
    onResend?: () => Promise<void>;
    redirectTo?: string;
    title?: string;
    description?: string;
}

export const Content: React.FC<VerifyCodeProps> = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { 
        emailOrPhone = '', 
        title = 'Enter Verification Code',
        description = 'Please enter the 5-digit code we sent to your email or phone number',
        redirectTo = '/login',
        isReset = false
    } = (location.state as any) || {};

    const [code, setCode] = useState(['', '', '', '', '']);
    const [timer, setTimer] = useState(60);
    const [canResend, setCanResend] = useState(false);
    
    const { verifyCode, verifyResetOtp, forgotPassword, isLoading, error, clearError } = useAuthStore();

    useEffect(() => {
        let interval: any;
        if (timer > 0 && !canResend) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else {
            setCanResend(true);
        }
        return () => clearInterval(interval);
    }, [timer, canResend]);

    const handleChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;

        const newCode = [...code];
        newCode[index] = value.slice(-1);
        setCode(newCode);

        // Move to next input
        if (value && index < 4) {
            const nextInput = document.getElementById(`code-${index + 1}`);
            nextInput?.focus();
        }

        // Auto submit if all digits are entered
        const fullCode = newCode.join('');
        if (fullCode.length === 5) {
            handleSubmit(fullCode);
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            const prevInput = document.getElementById(`code-${index - 1}`);
            prevInput?.focus();
        }
    };

    const handleSubmit = async (enteredCode: string) => {
        clearError();
        
        let success = false;
        if (isReset) {
            success = await verifyResetOtp({ emailOrPhone, otp: enteredCode });
        } else {
            success = await verifyCode({ emailOrPhone, code: enteredCode });
        }

        if (success) {
            navigate(redirectTo, { state: { emailOrPhone, isVerified: true } });
        }
    };

    const handleResendCode = async () => {
        if (!canResend) return;
        
        clearError();
        const success = await forgotPassword({ emailOrPhone });
        if (success) {
            setTimer(60);
            setCanResend(false);
            setCode(['', '', '', '', '']);
        }
    };

    return (
        <div className="md:h-full w-full">
            <AuthHeader 
                title={title}
                subtitle={description}
            />
            <div className="w-full mt-4">
                <div className='space-y-6'>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit(code.join(''));
                    }}>
                        <div className="flex space-x-3 mb-8">
                            {code.map((digit, index) => (
                                <input
                                    key={index}
                                    id={`code-${index}`}
                                    type="text"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="w-12 h-12 md:w-14 md:h-14 text-center text-2xl font-bold border-2 border-gray-400 rounded-lg focus:border-btngreen outline-none transition-colors"
                                    autoFocus={index === 0}
                                />
                            ))}
                        </div>

                        <AuthError message={error || ''} />

                        <Button
                            type="submit"
                            loading={isLoading}
                            // disabled={code.some(digit => digit.length !== 1)}
                        >
                            Verify Code
                        </Button>

                        <div className="mt-6 flex items-center space-x-1 font-nunito justify-center">
                            <p className="text-sm text-gray-600">
                                {!canResend ? (
                                    `Didn't receive the code? Resend in ${timer}s`
                                ) : (
                                    "Didn't receive the code?"
                                )}
                            </p>

                            <button
                                type="button"
                                onClick={handleResendCode}
                                disabled={!canResend || isLoading}
                                className={`text-sm  ${canResend && !isLoading
                                    ? 'text-btngreen'
                                    : 'text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                Resend Code
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};