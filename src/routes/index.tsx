import { PrivatedRoutes } from "./Privated.routes";
import { PublicRoutes } from "./Public.routes";

export function Routes() {
  const isLogged = !!localStorage.getItem("@user");

  if (isLogged) return <PrivatedRoutes />;
  return <PublicRoutes />;
}
