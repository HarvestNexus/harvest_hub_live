import axios from "axios";
import { getAuthToken } from "../config/index";

const NODE_ENDPOINT = process.env.REACT_APP_NODE_SERVER || "";

const NodeClient = axios.create({
  baseURL: NODE_ENDPOINT,
  timeout: 360000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

NodeClient.interceptors.request.use(
  async (config) => {
    const token = await getAuthToken();
    if (token && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete NodeClient.defaults.headers.common.Authorization;
    }
    return config;
  },

  (error) => Promise.reject(error)
);

export default NodeClient;
