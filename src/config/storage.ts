const tokenKey = "fitBUX-jwt";
const refreshKey = "fitBUX-refresh-jwt";

export const setAuthToken = (token: string): void => {
  localStorage.setItem(tokenKey, token);
};

export const getAuthToken = (): string => {
  return localStorage.getItem(tokenKey) || "";
};

export const removeAuthTokens = (): void => {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(refreshKey);
};

export const setRefreshToken = (token: string): void => {
  localStorage.setItem(refreshKey, token);
};

export const getRefreshToken = (): string => {
  return localStorage.getItem(refreshKey) || "";
};

export const clearPersistentState = () => {
  removeAuthTokens();
};

