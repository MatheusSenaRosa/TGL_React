interface ICart {
  id: number;
  name: string;
  color: string;
  price: number;
  numbers: string[];
}

export interface ICartStore {
  cart: ICart[];
  addToCart: ({ id, color, price, numbers, name }: ICart) => void;
}
