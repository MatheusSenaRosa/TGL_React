interface Token {
  type: string;
  token: string;
  expires_at: Date;
}

interface User {
  email: string;
  name: string;
  created_at: Date;
  updated_at: Date;
  id: number;
}

export interface IBodyCreateUser {
  name: string;
  email: string;
  password: string;
}

export interface ICreateUserReturn {
  user: User;
  token: Token;
}

export interface IMyAccountReturn {
  id: number;
  email: string;
  is_admin: number;
  name: string;
  token: null;
  token_created_at: null;
  created_at: Date;
  updated_at: Date;
  bets: any[];
  picture: null;
}

export interface IBodyUpdateMyUser {
  email: string;
  name: string;
}
export interface IUpdateMyUserReturn {
  id: number;
  email: string;
  is_admin: number;
  name: string;
  token: null;
  token_created_at: null;
  created_at: Date;
  updated_at: Date;
}
