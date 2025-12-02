import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../../store/authStore';
import { Button } from '../../../components/common/Button';

interface VerifyCodeProps {
    email?: string;
    userType?: string;
    onSuccess?: (code: string) => void;
    onResend?: () => Promise<void>;
    redirectTo?: string;
    title?: string;
    description?: string;
}

export const Content: React.FC<VerifyCodeProps> = ({
    email: propEmail,
    onSuccess,
    onResend,
    redirectTo,
    description = 'Please enter the verification code sent to your email',
}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [code, setCode] = useState<string[]>(['', '', '', '', '']);
    const [timer, setTimer] = useState(60);
    const [canResend, setCanResend] = useState(false);

    const { verifyCode, verifyResetOtp, isLoading, error, clearError } = useAuthStore();

    // Get email from props, URL params, or location state
    const email = propEmail ||
        location.state?.emailOrPhone ||
        location.state?.email ||
        new URLSearchParams(window.location.search).get('email') ||
        '';

    const isReset = location.state?.isReset || false;

    // Timer for resend code
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            setCanResend(true);
        }
    }, [timer]);

    const handleChange = (index: number, value: string) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            // Auto-focus next input
            if (value && index < 4) {
                const nextInput = document.getElementById(`code-${index + 1}`);
                nextInput?.focus();
            }

            // Auto-submit when all digits entered
            if (newCode.every(digit => digit.length === 1)) {
                handleSubmit(newCode.join(''));
            }
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            const prevInput = document.getElementById(`code-${index - 1}`);
            prevInput?.focus();
        }
    };

    const handleSubmit = async (verificationCode: string) => {
        clearError();

        if (onSuccess) {
            // If custom success handler provided
            onSuccess(verificationCode);
        } else {
            // Default behavior: verify via auth store
            let success = false;
            if (isReset) {
                success = await verifyResetOtp({ otp: verificationCode });
            } else {
                success = await verifyCode({ otp: verificationCode });
            }

            if (success && redirectTo) {
                navigate(redirectTo, {
                    state: { email, token: verificationCode }
                });
            }
        }
    };

    const handleResendCode = async () => {
        clearError();

        if (onResend) {
            await onResend();
        } else {
            // Default resend behavior
            // You could call forgotPassword here or another API
            console.log('Resending code to:', email);
        }

        setTimer(60);
        setCanResend(false);
        setCode(['', '', '', '', '']);

        // Focus first input
        const firstInput = document.getElementById('code-0');
        firstInput?.focus();
    };

    return (
        <div className="h-full w-full p-4 lg:p-6">
            <div>
                <h1 className='leading-160 text-darkgrey text-[45px] text-center'>Login</h1>
                <p className='text-center text-lightgrey lg:text-lg leading-160'>Welcome back! Please login to your account.</p>
            </div>
            <div className="w-full space-y-8 mt-4 lg:mt-[54px]">
                <div className='space-y-6 max-w-lg mx-auto'>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit(code.join(''));
                    }}>
                        <div className="flex justify-center space-x-3 mb-8">
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
                                    className="w-14 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                                    autoFocus={index === 0}
                                />
                            ))}
                        </div>

                        {error && (
                            <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded text-center">
                                {error}
                            </div>
                        )}

                        <Button
                            type="submit"
                            loading={isLoading}
                            disabled={code.some(digit => digit.length !== 1)}
                        >
                            Verify Code
                        </Button>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600 mb-2">
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
                                className={`text-sm font-medium ${canResend && !isLoading
                                    ? 'text-green-600 hover:text-green-500'
                                    : 'text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                Resend Code
                            </button>
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