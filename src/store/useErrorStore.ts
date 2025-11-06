import { create } from "zustand";

export const useErrorStore = create<{
  errorMessage: string | null;
  isError: boolean;
  setError: (message: string | null, isError: boolean) => void;
}>((set) => ({
  errorMessage: null,
  isError: false,
  setError: (message, isError) => set({ errorMessage: message, isError }),
}));
