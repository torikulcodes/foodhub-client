// store/useScrollStore.js
import { create } from "zustand";

export const useScrollStore = create((set) => ({
  showNavbar: false,
  setShowNavbar: (value) => set({ showNavbar: value }),
}));