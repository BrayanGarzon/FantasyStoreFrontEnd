// store/authStore.ts
import { create } from "zustand";
import { User } from '../api-client/models';
import { authenticateApi } from '../api/index'

interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
  setUser: (user: User) => void;
  setTokens: (accessToken: string, refreshToken: string) => void;
  setAuthenticated: (isAuthenticated: boolean) => void;
  logout: () => void;
  initializeFromStorage: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  user: null,
  setUser: (user: User) => {
    set({ user });
    localStorage.setItem('user', JSON.stringify(user));
  },
  setTokens: (accessToken: string, refreshToken: string) => {
    set({ accessToken, refreshToken, isAuthenticated: true });
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  },
  setAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
  logout: () => {
    set({ isAuthenticated: false, accessToken: null, refreshToken: null, user: null });
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  },
  initializeFromStorage: () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const userString = localStorage.getItem('user');
    
    if (accessToken && refreshToken) {
      set({
        isAuthenticated: true,
        accessToken,
        refreshToken,
        user: userString ? JSON.parse(userString) : null
      });
    }
  }
  
}));