import create from "zustand";

import { ICartStore } from "./interfaces";

export const useCartStore = create<ICartStore>((set) => ({
  cart: [],
  addToCart: (newItem) =>
    set((state) => ({
      cart: [newItem, ...state.cart],
    })),

  removeFromCart: (index) =>
    set((state) => {
      const newCart = [...state.cart];
      newCart.splice(index, 1);
      return {
        cart: newCart,
      };
    }),
}));
