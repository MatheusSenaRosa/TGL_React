import api from "../axios.config";

import {
  IBodyCreateUser,
  IBodyUpdateMyUser,
  ICreateUserReturn,
  IMyAccountReturn,
  IUpdateMyUserReturn,
} from "@interfaces/index";

import { IUserServices } from "./interfaces";

export const userServices = (): IUserServices => {
  const createUser = async (
    body: IBodyCreateUser
  ): Promise<ICreateUserReturn> => {
    const { data } = await api.post("user/create", body);

    return data;
  };

  const myAccount = async (): Promise<IMyAccountReturn> => {
    const { data } = await api.get("user/my-account");

    return data;
  };

  const updateMyUser = async (
    body: IBodyUpdateMyUser
  ): Promise<IUpdateMyUserReturn> => {
    const { data } = await api.put("user/update", body);

    return data;
  };

  return { createUser, myAccount, updateMyUser };
};
