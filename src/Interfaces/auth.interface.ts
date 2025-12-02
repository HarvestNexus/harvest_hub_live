export interface User {
  id: string;
  email: string;
  phoneNumber?: string;
  fullName: string;
  role: 'farmer' | 'buyer' | 'logistics';
}

export interface Farmer extends User {
  farmLocation: string;
  cropType: string;
}

export interface Logistics extends User {
  companyName: string;
  vehicleType: string;
  vehicleCapacity: string;
  serviceArea: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  emailOrPhone: string;
  password: string;
}

export interface SignupCredentials {
  fullName: string;
  emailOrPhone: string;
  password: string;
  role: 'farmer' | 'buyer' | 'logistics';
  // Role-specific fields (optional in base type)
  farmLocation?: string;
  cropType?: string;
  companyName?: string;
  vehicleType?: string;
  vehicleCapacity?: string;
  serviceArea?: string;
}

export interface ForgotPasswordData {
  emailOrPhone: string;
}

export interface ResetPasswordData {
  newPassword: string;
  confirmPassword: string;
}

export interface VerifyCodeData {
  otp: string;
}

export interface VerifyResetOtpData {
  otp: string;
}