interface Token {
  type: string;
  token: string;
  expires_at: Date;
}

interface User {
  id: number;
  email: string;
  is_admin: number;
  name: string;
  token: null;
  token_created_at: null;
  created_at: Date;
  updated_at: Date;
  picture: null;
}

export interface IBodyLoginUser {
  email: string;
  password: string;
}

export interface ILoginReturn {
  user: User;
  token: Token;
}

export interface IBodyResetPassword {
  email: string;
}

export interface IResetPasswordReturn {
  id: number;
  email: string;
  is_admin: number;
  name: string;
  token: string;
  token_created_at: Date;
  created_at: Date;
  updated_at: Date;
}

export interface IBodyChangePassword {
  body: {
    password: string;
  };
  token: string;
}

export interface IChangePasswordReturn {
  id: number;
  email: string;
  is_admin: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}
