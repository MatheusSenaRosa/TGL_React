import { useContext } from "react";
import { AuthContext } from "@context";
import { LoadingPage } from "@publicRoutes";

import { PublicRoutes } from "./Public.routes";
import { PrivatedRoutes } from "./Privated.routes";

type Props = {
  isLoading: boolean;
};

export const Routes = ({ isLoading }: Props) => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {!user && <PublicRoutes />}
      {user && <PrivatedRoutes />}
    </>
  );
};
