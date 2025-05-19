import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UseDarkTheme {
  darkTheme: boolean | null
  toggleTheme: () => void;
  setTheme: (dark: boolean) => void;
}


export const useDarkTheme = create<UseDarkTheme>()(
  persist(
    set => ({
    darkTheme: null,
    toggleTheme: () => set((state) => ({ darkTheme: !state.darkTheme })),
    setTheme: (dark) => set({ darkTheme: dark }),
  }),
  {
    name: 'theme-storage'
  }
))