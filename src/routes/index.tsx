import { useContext } from "react";
import { AuthContext } from "@context";

import { PublicRoutes } from "./Public.routes";
import { PrivatedRoutes } from "./Privated.routes";

export const Routes = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {!user && <PublicRoutes />}
      {user && <PrivatedRoutes />}
    </>
  );
};
