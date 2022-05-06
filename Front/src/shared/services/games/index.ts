import { IListGamesReturn } from "./../../interfaces/gamesInterfaces";
import { IGamesServices } from "./interfaces";
import api from "../axios.config";

export const gamesServices = (): IGamesServices => {
  const listGames = async (): Promise<IListGamesReturn> => {
    const { data } = await api.get("/cart_games");

    return data;
  };

  return { listGames };
};
