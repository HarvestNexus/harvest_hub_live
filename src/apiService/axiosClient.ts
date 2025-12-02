import axios from "axios";
import { getAuthToken } from "../config/index";

const API_ENDPOINT = import.meta.env.VITE_REACT_APP_API_URL || "";
export const SHORT_ENDPOINT = API_ENDPOINT.replace("/api", "");

const Client = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const unauthenticatedUrls = [
  "/buyer/login",
  "/buyer/register",
  "/buyer/forget-password",
  "/buyer/verify-otp",
  "/buyer/verify-reset-otp",
  "/buyer/reset-password",
];

Client.interceptors.request.use(
  async (config) => {
    if (unauthenticatedUrls.some((url) => config.url?.includes(url))) {
      return config;
    }
    const token = await getAuthToken();
    if (token && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default Client;
