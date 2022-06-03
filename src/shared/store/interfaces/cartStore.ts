import { ICart } from "@interfaces";

export interface ICartStore {
  cart: ICart[];
  addToCart: ({ game: { id, color, name, price }, numbers }: ICart) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
}
