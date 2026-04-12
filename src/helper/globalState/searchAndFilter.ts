import { create } from "zustand";

interface FilterState {
  searchTerm: string;
  categoryId: string;
  dietId: string;
  setSearchTerm: (term: string) => void;
  setCategoryId: (id: string) => void;
  setDietId: (id: string) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  searchTerm: "",
  categoryId: "all",
  dietId: "all",
  setSearchTerm: (term) => set({ searchTerm: term }),
  setCategoryId: (id) => set({ categoryId: id }),
  setDietId: (id) => set({ dietId: id }),
}));