import { userType } from "@types";
import { createContext, ReactNode, useState } from "react";

type AuthContextType = {
  user: userType;
  setUser: (currentUser: userType) => void;
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
  const [user, setUser] = useState<userType>(initialState.user);

  return (
    <AuthContext.Provider
      value={{ user, setUser: (currentUser) => setUser(currentUser) }}
    >
      {children}
    </AuthContext.Provider>
  );
};
