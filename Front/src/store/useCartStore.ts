import create from "zustand";

type CartType = {
  type: string;
  id: number;
  color: string;
  price: number;
  numbers: string;
};

type State = {
  cart: CartType[];
  addToCart: (cartItem: CartType) => void;
  removeFromCart: (gameId: number, numbers: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<State>((set) => ({
  cart: [],
  addToCart: (cartItem: CartType) => {
    set((state) => ({ cart: [cartItem, ...state.cart] }));
  },
  removeFromCart: (gameId, numbers) =>
    set((state) => {
      const aux = [...state.cart];
      aux.splice(
        aux.findIndex((item) => item.numbers === numbers && item.id === gameId),
        1
      );
      return { cart: aux };
    }),
  clearCart: () => set(() => ({ cart: [] })),
}));
