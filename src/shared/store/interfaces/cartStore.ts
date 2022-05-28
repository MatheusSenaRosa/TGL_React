import { ICart } from "@interfaces";

export interface ICartStore {
  cart: ICart[];
  addToCart: ({ id, color, price, numbers, name }: ICart) => void;
  removeFromCart: (index: number) => void;
}
