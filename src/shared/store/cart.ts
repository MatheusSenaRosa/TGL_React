import create from "zustand";

import { ICartStore } from "./interfaces";

export const useCartStore = create<ICartStore>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),
}));
