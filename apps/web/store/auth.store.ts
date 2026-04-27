import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  sub: string;
  email: string;
  name: string;
  username: string;
  exp: number;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  username: string;
}

interface AuthStore {
  accessToken: string | null;
  user: AuthUser | null;
  isLoading: boolean; 
  isHydrated: boolean; 

  setAuth: (accessToken: string, user: AuthUser) => void;
  setAccessToken: (accessToken: string) => void;
  setLoading: (v: boolean) => void;
  setHydrated: (v: boolean) => void;
  clearAuth: () => void;

  isAuthenticated: () => boolean;
  isTokenExpired: () => boolean;
}

export const useAuthStore = create<AuthStore>()((set, get) => ({
  accessToken: null,
  user: null,
  isLoading: true,
  isHydrated: false,

  setAuth: (accessToken, user) => set({ accessToken, user }),

  setAccessToken: (accessToken) => {
    try {
      const payload = jwtDecode<JwtPayload>(accessToken);
      set({
        accessToken,
        user: {
          id: payload.sub,
          email: payload.email,
          name: payload.name,
          username: payload.username,
        },
      });
    } catch {
      set({ accessToken, user: null });
    }
  },

  setLoading: (isLoading) => set({ isLoading }),
  setHydrated: (isHydrated) => set({ isHydrated }),

  clearAuth: () => set({ accessToken: null, user: null }),

  isAuthenticated: () => {
    const { accessToken } = get();
    if (!accessToken) return false;
    try {
      const { exp } = jwtDecode<JwtPayload>(accessToken);
      return exp * 1000 > Date.now();
    } catch {
      return false;
    }
  },

  isTokenExpired: () => {
    const { accessToken } = get();
    if (!accessToken) return true;
    try {
      const { exp } = jwtDecode<JwtPayload>(accessToken);
      return exp * 1000 < Date.now();
    } catch {
      return true;
    }
  },
}));
