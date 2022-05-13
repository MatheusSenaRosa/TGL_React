import { IUser } from "@interfaces";
import { createContext, ReactNode, useState } from "react";

type AuthContextType = {
  user: IUser;
  setUser: (currentUser: IUser) => void;
};

const initialState: AuthContextType = {
  user: null,
  setUser: () => {},
};

export const AuthContext = createContext<AuthContextType>(initialState);

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<IUser>(initialState.user);

  return (
    <AuthContext.Provider
      value={{ user, setUser: (currentUser) => setUser(currentUser) }}
    >
      {children}
    </AuthContext.Provider>
  );
};
