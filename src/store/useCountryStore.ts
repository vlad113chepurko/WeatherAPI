import { create } from "zustand";

export const useCountryStore = create<{
  country: string;
  setCountry: (country: string) => void;
}>((set) => ({
  country: "",
  setCountry: (country: string) => set({ country }),
}));
