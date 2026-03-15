export interface User {
  id: string;
  email: string;
  phoneNumber?: string;
  fullName: string;
  role: 'farmer' | 'buyer' | 'logistics' | 'facility';
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

export interface StorageFacility extends User {
  facilityName: string;
  facilityLocation: string;
  facilityCapacity: string;
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
  role: 'farmer' | 'buyer' | 'logistics' | 'facility';
  // Role-specific fields (optional in base type)
  farmLocation?: string;
  cropType?: string;
  companyName?: string;
  vehicleType?: string;
  vehicleCapacity?: string;
  serviceArea?: string;
  facilityName?: string;
  facilityLocation?: string;
  facilityCapacity?: string;
}

export interface ForgotPasswordData {
  emailOrPhone: string;
}

export interface ResetPasswordData {
  emailOrPhone: string;
  password: string;
}

export interface VerifyCodeData {
  emailOrPhone: string;
  code: string;
}

export interface VerifyResetOtpData {
  emailOrPhone: string;
  otp: string;
}