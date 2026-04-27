"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/auth.store";

export function useRequireAuth() {
  const router = useRouter();
  const isHydrated = useAuthStore((s) => s.isHydrated);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated());

  useEffect(() => {
    if (!isHydrated) return;
    if (!isAuthenticated) router.replace("/login");
  }, [isHydrated, isAuthenticated, router]);

  return { isHydrated, isAuthenticated };
}

// Uso num layout de rota protegida:
// const { isHydrated } = useRequireAuth()
// if (!isHydrated) return <FullPageSkeleton />
