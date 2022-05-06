import {
  IBodyLoginUser,
  ILoginReturn,
  IBodyResetPassword,
  IResetPasswordReturn,
  IBodyChangePassword,
  IChangePasswordReturn,
} from "@interfaces/index";
import api from "../axios.config";
import { IAuthServices } from "./interfaces";

export const authServices = (): IAuthServices => {
  const login = async (body: IBodyLoginUser): Promise<ILoginReturn> => {
    const { data } = await api.post("login", body);

    return data;
  };

  const resetPassword = async (
    body: IBodyResetPassword
  ): Promise<IResetPasswordReturn> => {
    const { data } = await api.post("reset", body);

    return data;
  };

  const changePassword = async ({
    body,
    token,
  }: IBodyChangePassword): Promise<IChangePasswordReturn> => {
    const { data } = await api.post(`reset/${token}`, body);

    return data;
  };

  return { login, resetPassword, changePassword };
};
