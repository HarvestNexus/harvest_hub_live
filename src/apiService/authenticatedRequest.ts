import axiosClient from "./axiosClient";
import {
  getRefreshToken,
  setAuthToken,
  setRefreshToken,
  clearPersistentState,
} from "../config/index";

const STATUS_UNAUTHORIZED = 401;

let loggingIn = false;

const refreshLogin = () => {
  loggingIn = true;
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    clearPersistentState();
    return Promise.reject();
  }
  return axiosClient
    .post("auth/refresh_token.php", null, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${refreshToken}`,
      },
    })
    .then(({ data }: any) => {
      loggingIn = false;
      if (data.token && data.refresh) {
        setAuthToken(data.token);
        setRefreshToken(data.refresh);
      }
    })
    .catch((error) => {
      loggingIn = false;
      clearPersistentState();
      throw error;
    });
};

(window as any).refreshLogin = refreshLogin;

const apiQueue: any = [];

interface Func {
  (...args: any[]): any;
}

const makeAuthenticatedRequest: <T extends Func>(
  requestFunc: T
) => ReturnType<T> = (requestFunc) => {
  return requestFunc().catch((error: any) => {
    if (error.response && error.response.status === STATUS_UNAUTHORIZED) {
      if (!loggingIn) {
        return refreshLogin().then(() => {
          runApiQueue();
          return makeAuthenticatedRequest(requestFunc);
        });
      } else {
        return new Promise((resolve) => {
          apiQueue.push(() =>
            makeAuthenticatedRequest(requestFunc).then(resolve)
          );
        });
      }
    } else {
      console.error(error);
      throw error;
    }
  });
};


const runApiQueue = () => {
  while (apiQueue.length) {
    apiQueue.shift()();
  }
};

export default makeAuthenticatedRequest;
