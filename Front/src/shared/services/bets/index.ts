import { IListBetReturn, INewBetReturn, IBodyNewBet } from "@interfaces/index";
import api from "../axios.config";
import { IBetsServices } from "./interfaces";

export const betsServices = (): IBetsServices => {
  const listBet = async (): Promise<IListBetReturn[]> => {
    const { data } = await api.get("/bet/all-bets");
    return data;
  };

  const newBet = async (body: IBodyNewBet): Promise<INewBetReturn> => {
    const { data } = await api.post("/bet/new-bet", body);
    return data;
  };

  return {
    listBet,
    newBet,
  };
};
