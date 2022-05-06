export interface IListGamesReturn {
  min_cart_value: number;
  types: ListGamesType[];
}

export interface ListGamesType {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
}
