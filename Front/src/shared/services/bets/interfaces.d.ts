import { IListBetReturn, INewBetReturn, IBodyNewBet } from "@interfaces/index";

export interface IBetsServices {
  listBet: () => Promise<IListBetReturn[]>;
  newBet: ({ games }: IBodyNewBet) => Promise<INewBetReturn>;
}
