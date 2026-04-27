"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { authApi } from "../lib/auth.api";
import { useAuthStore } from "../store/auth.store";

export function useAuthActions() {
  const router = useRouter();
  const params = useSearchParams();
  const setAuth = useAuthStore((s) => s.setAuth);
  const clearAuth = useAuthStore((s) => s.clearAuth);

  function redirectAfterAuth() {
    const to = params.get("redirect") ?? "/app";
    router.push(to);
    router.refresh();
  }

  async function login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const data = await authApi.login({ email, password });
    setAuth(data.accessToken, data.user);
    redirectAfterAuth();
  }

  async function register({
    name,
    email,
    password,
    username,
  }: {
    name: string;
    username: string;
    email: string;
    password: string;
  }) {
    const data = await authApi.register({ name, username, email, password });
    setAuth(data.accessToken, data.user);
    redirectAfterAuth();
  }

  async function logout() {
    try {
      await authApi.logout();
    } catch (error) {
      console.log(error);
    }
    clearAuth();
    router.push("/login");
    router.refresh();
  }

  return { login, register, logout };
}
