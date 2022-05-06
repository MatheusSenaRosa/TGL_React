import { IListGamesReturn } from "@interfaces/gamesInterfaces";

export interface IGamesServices {
  listGames: () => Promise<IListGamesReturn>;
}
