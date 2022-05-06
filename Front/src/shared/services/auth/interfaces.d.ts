import {
  IBodyLoginUser,
  IBodyResetPassword,
  ILoginReturn,
  IResetPasswordReturn,
  IBodyChangePassword,
  IChangePasswordReturn,
} from "@interfaces/index";

export interface IAuthServices {
  login: ({ email, password }: IBodyLoginUser) => Promise<ILoginReturn>;

  resetPassword: ({
    email,
  }: IBodyResetPassword) => Promise<IResetPasswordReturn>;

  changePassword: ({
    body,
    token,
  }: IBodyChangePassword) => Promise<IChangePasswordReturn>;
}
