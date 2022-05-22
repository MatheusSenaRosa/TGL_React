import { useContext } from "react";

import { AuthContext } from "@context";

import { PrivatedRoutes } from "./Privated.routes";
import { PublicRoutes } from "./Public.routes";

export function Routes() {
  const { user } = useContext(AuthContext);

  return (
    <>
      {!user && <PublicRoutes />}
      {user && <PrivatedRoutes />}
    </>
  );
}
