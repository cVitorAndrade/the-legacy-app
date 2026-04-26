import axios from "axios";

export interface AuthResponse {
  accessToken: string;
  user: { id: string; email: string; name: string; username: string };
}

const authBase = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export const authApi = {
  register: (data: {
    name: string;
    username: string;
    email: string;
    password: string;
  }) => authBase.post<AuthResponse>("/auth/register", data).then((r) => r.data),

  login: (data: { email: string; password: string }) =>
    authBase.post<AuthResponse>("/auth/login", data).then((r) => r.data),

  refresh: () =>
    authBase.post<{ accessToken: string }>("/auth/refresh").then((r) => r.data),

  logout: () => authBase.post("/auth/logout").then((r) => r.data),
};
