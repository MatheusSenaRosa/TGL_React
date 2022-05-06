import {
  IBodyCreateUser,
  IBodyUpdateMyUser,
  ICreateUserReturn,
  IMyAccountReturn,
  IUpdateMyUserReturn,
} from "@interfaces/index";

export interface IUserServices {
  createUser: ({
    name,
    email,
    password,
  }: IBodyCreateUser) => Promise<ICreateUserReturn>;

  myAccount: () => Promise<IMyAccountReturn>;

  updateMyUser: ({
    email,
    name,
  }: IBodyUpdateMyUser) => Promise<IUpdateMyUserReturn>;
}
