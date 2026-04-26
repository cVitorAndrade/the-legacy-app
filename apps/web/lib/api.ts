import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "../store/auth.store";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  timeout: 10_000,
});

let refreshPromise: Promise<string> | null = null;

async function getNewAccessToken(): Promise<string> {
  if (refreshPromise) return refreshPromise;

  refreshPromise = axios
    .post<{ accessToken: string }>(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
      {},
      { withCredentials: true },
    )
    .then((res) => {
      const { accessToken } = res.data;
      useAuthStore.getState().setAccessToken(accessToken);
      return accessToken;
    })
    .catch((err) => {
      useAuthStore.getState().clearAuth();
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("auth:session-expired"));
      }
      throw err;
    })
    .finally(() => {
      refreshPromise = null;
    });

  return refreshPromise;
}

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;

    const is401 = error.response?.status === 401;
    const notRetried = !original._retry;
    const notRefreshCall = !original.url?.includes("/auth/refresh");
    const notLoginCall = !original.url?.includes("/auth/login");

    if (is401 && notRetried && notRefreshCall && notLoginCall) {
      original._retry = true;

      try {
        const newToken = await getNewAccessToken();
        original.headers.Authorization = `Bearer ${newToken}`;
        return api(original);
      } catch {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);
