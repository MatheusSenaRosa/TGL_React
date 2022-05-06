export interface IListBetReturn {
  id: number;
  user_id: number;
  game_id: number;
  choosen_numbers: string;
  price: number;
  created_at: Date;
  type: Type;
}

export interface IBodyNewBet {
  games: Games[];
}

interface Games {
  game_id: number;
  numbers: number[];
}

export interface INewBetReturn {
  bet: Bet[];
}

interface Bet {
  choosen_numbers: string;
  user_id: number;
  game_id: number;
  price: number;
  created_at: Date;
  updated_at: Date;
  id: number;
}

interface Type {
  id: number;
  type: string;
}
