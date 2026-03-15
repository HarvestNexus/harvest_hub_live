import { create } from 'zustand';
import type { AuthState, User, LoginCredentials, SignupCredentials, ForgotPasswordData, ResetPasswordData, VerifyCodeData, VerifyResetOtpData } from "../interfaces/auth.interface";
import { LoginApi, signupApi, forgotPasswordApi, VerifyCodeApi, VerifyResetOtpApi, resetPasswordApi } from "../apiService/modules/auth";
import { setAuthToken, setRefreshToken, removeAuthTokens } from "../config";

interface AuthStore extends AuthState {
  login: (credentials: LoginCredentials) => Promise<boolean>;
  signup: (credentials: SignupCredentials) => Promise<boolean>;
  logout: () => void;
  forgotPassword: (data: ForgotPasswordData) => Promise<boolean>;
  resetPassword: (data: ResetPasswordData) => Promise<boolean>;
  verifyCode: (data: VerifyCodeData) => Promise<boolean>;
  verifyResetOtp: (data: VerifyResetOtpData) => Promise<boolean>;
  clearError: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (credentials: LoginCredentials) => {
    set({ isLoading: true, error: null });
    try {
      const data = await LoginApi(credentials);

      if (data.token) setAuthToken(data.token);
      if (data.refresh) setRefreshToken(data.refresh);

      set({ user: data.user || data, isAuthenticated: true, isLoading: false });
      return true;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Login failed';
      set({ error: errorMessage, isLoading: false });
      return false;
    }
  },

  signup: async (credentials: SignupCredentials) => {
    set({ isLoading: true, error: null });
    try {
      const data = await signupApi(credentials);

      if (data.token) setAuthToken(data.token);
      if (data.refresh) setRefreshToken(data.refresh);

      set({ user: data.user || data, isAuthenticated: true, isLoading: false });
      return true;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Signup failed';
      set({ error: errorMessage, isLoading: false });
      return false;
    }
  },

  logout: () => {
    removeAuthTokens();
    set({ user: null, isAuthenticated: false });
  },

  forgotPassword: async (data: ForgotPasswordData) => {
    set({ isLoading: true, error: null });
    try {
      await forgotPasswordApi(data);
      set({ isLoading: false });
      return true;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to send reset code';
      set({ error: errorMessage, isLoading: false });
      return false;
    }
  },

  verifyCode: async (data: VerifyCodeData) => {
    set({ isLoading: true, error: null });
    try {
      await VerifyCodeApi(data);
      set({ isLoading: false });
      return true;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Verification failed';
      set({ error: errorMessage, isLoading: false });
      return false;
    }
  },

  verifyResetOtp: async (data: VerifyResetOtpData) => {
    set({ isLoading: true, error: null });
    try {
      await VerifyResetOtpApi(data);
      set({ isLoading: false });
      return true;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Verification failed';
      set({ error: errorMessage, isLoading: false });
      return false;
    }
  },

  resetPassword: async (data: ResetPasswordData) => {
    set({ isLoading: true, error: null });
    try {
      await resetPasswordApi(data);
      set({ isLoading: false });
      return true;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to reset password';
      set({ error: errorMessage, isLoading: false });
      return false;
    }
  },

  clearError: () => set({ error: null }),
}));