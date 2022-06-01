interface IGame {
  id: number;
  color: string;
  description: string;
  max_number: number;
  name: string;
  price: number;
  range: number;
}

export interface IGames {
  min_cart_value: number;
  games: IGame[];
}
