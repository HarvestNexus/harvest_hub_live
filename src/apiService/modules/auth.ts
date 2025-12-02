import type {
  LoginCredentials,
  SignupCredentials,
  ForgotPasswordData,
  VerifyCodeData,
  VerifyResetOtpData,
  ResetPasswordData,
} from "../../interfaces/auth.interface";
import axiosClient from "../axiosClient";

export const LoginApi = async (credentials: LoginCredentials) => {
  const { data } = await axiosClient.post("/buyer/login", credentials);
  return data;
};

export const signupApi = async (credentials: SignupCredentials) => {
  const { data } = await axiosClient.post("/buyer/register", credentials);
  return data;
};

export const forgotPasswordApi = async (data: ForgotPasswordData) => {
  const response = await axiosClient.post("/buyer/forgot-password", data);
  return response.data;
};

export const VerifyCodeApi = async (data: VerifyCodeData) => {
  const response = await axiosClient.post("/buyer/verify-otp", data);
  return response.data;
};

export const VerifyResetOtpApi = async (data: VerifyResetOtpData) => {
  const response = await axiosClient.post("/buyer/verify-reset-otp", data);
  return response.data;
};

export const resetPasswordApi = async (data: ResetPasswordData) => {
  const response = await axiosClient.post("/buyer/reset-password", data);
  return response.data;
};
