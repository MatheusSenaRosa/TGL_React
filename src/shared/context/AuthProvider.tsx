import { createContext, ReactNode, useMemo, useState } from "react";

import { IUser } from "@interfaces";

type AuthContextType = {
  user: IUser;
  setUser: (currentUser: IUser) => void;
};

const initialState: AuthContextType = {
  user: null,
  setUser: () => null,
};

export const AuthContext = createContext<AuthContextType>(initialState);

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<IUser>(initialState.user);

  return (
    <AuthContext.Provider
      value={useMemo(
        () => ({ user, setUser: (currentUser) => setUser(currentUser) }),
        []
      )}
    >
      {children}
    </AuthContext.Provider>
  );
}
