export type {
  IBodyCreateUser,
  ICreateUserReturn,
  IMyAccountReturn,
  IUpdateMyUserReturn,
  IBodyUpdateMyUser,
} from "./userInterfaces";

export type {
  IBodyLoginUser,
  ILoginReturn,
  IBodyResetPassword,
  IResetPasswordReturn,
  IBodyChangePassword,
  IChangePasswordReturn,
} from "./authInterfaces";

export type {
  IListBetReturn,
  INewBetReturn,
  IBodyNewBet,
} from "./betsInterface";

export type { IListGamesReturn, ListGamesType } from "./gamesInterfaces";

export type {
  IStateNewBetPage,
  ActionNewBetPageType,
  IStateHomePage,
  IActionHomePageType,
} from "./reducerInterface";
