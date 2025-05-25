import { create } from "zustand";

interface UseMenuMobile {
  menuMobile: boolean
  setMenuState: (open: boolean) => void;
}

export const useMenuMobile = create<UseMenuMobile>((set) => ({
  menuMobile: false,
  setMenuState: (open) => set({ menuMobile: open }),
}));