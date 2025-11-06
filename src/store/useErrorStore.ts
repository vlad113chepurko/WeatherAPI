import { create } from "zustand";

export const useErrorStore = create<{
  errorMessage: string | null;
  isError: boolean;
  isSuccess: boolean;
  setSuccess: (isSuccess: boolean) => void;
  setError: (message: string | null, isError: boolean) => void;
}>((set) => ({
  errorMessage: null,
  isError: false,
  isSuccess: false,
  setSuccess: (isSuccess) => set({ isSuccess }),
  setError: (message, isError) => set({ errorMessage: message, isError }),
}));
