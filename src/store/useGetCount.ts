import { create } from "zustand";

export const useCountStore = create<{
  count: number;
  increment: () => void;
}>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
