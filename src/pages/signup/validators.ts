export const validateEmail = (email: string) =>
  /\S+@\S+\.\S+/.test(email);

export const validatePhone = (phone: string) =>
  /^[0-9]{8,15}$/.test(phone);

export const isEmpty = (value: string) => value.trim() === "";
