import { create } from "zustand";

export const useLoadingStore = create<{
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}>((set) => ({
  isLoading: false,
  setIsLoading: (loading: boolean) => set({ isLoading: loading }),
}));
