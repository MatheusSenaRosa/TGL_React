import { IListBetReturn } from "./betsInterface";
import { IListGamesReturn, ListGamesType } from "./gamesInterfaces";

export interface IStateNewBetPage {
  gamesList: IListGamesReturn;
  selectedGame: ListGamesType;
  selectedNumbers: number[];
}

export type ActionNewBetPageType =
  | { type: "ADD_DATA"; data: IListGamesReturn }
  | { type: "CLEAR_NUMBERS" }
  | { type: "SET_GAME"; choosen: ListGamesType }
  | { type: "SET_NUMBER"; newArray: number[] }
  | { type: "REMOVE_NUMBER"; newArray: number[] };

export interface IStateHomePage {
  betList: IListBetReturn[];
  gamesList: IListGamesReturn;
  filters: string[];
}

export type IActionHomePageType =
  | {
      type: "ADD_DATA";
      betListData: IListBetReturn[];
      gamesListData: IListGamesReturn;
    }
  | {
      type: "SET_FILTER";
      name: string;
    };
