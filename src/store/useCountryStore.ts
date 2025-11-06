import { create } from "zustand";

export const useCountryStore = create<{
  country: string;
  setCountry: (country: string) => void;
}>((set) => ({
  country: "",
  setCountry: (country: string) => {
    const firstChar = country.charAt(0).toUpperCase();
    const trimmedCountry = firstChar + country.slice(1).toLowerCase();
    set({ country: trimmedCountry });
  },
}));
