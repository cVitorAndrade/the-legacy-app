"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/auth.store";
import { authApi } from "../lib/auth.api";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const setAccessToken = useAuthStore((s) => s.setAccessToken);
  const clearAuth = useAuthStore((s) => s.clearAuth);
  const setLoading = useAuthStore((s) => s.setLoading);
  const setHydrated = useAuthStore((s) => s.setHydrated);
  const hydrated = useRef(false);

  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;

    const hydrate = async () => {
      try {
        const { accessToken } = await authApi.refresh();
        setAccessToken(accessToken);
      } catch {
        clearAuth();
      } finally {
        setLoading(false);
        setHydrated(true);
      }
    };

    hydrate();
  }, []);

  useEffect(() => {
    const handleExpired = () => {
      clearAuth();
      router.push("/login");
    };

    window.addEventListener("auth:session-expired", handleExpired);
    return () =>
      window.removeEventListener("auth:session-expired", handleExpired);
  }, [router, clearAuth]);

  return <>{children}</>;
}
