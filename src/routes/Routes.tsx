import { PrivateRoutes } from "./Private.routes";
import { PublicRoutes } from "./Public.routes";

export function Routes() {
  const isLogged = !!localStorage.getItem("@user");

  if (isLogged) return <PrivateRoutes />;
  return <PublicRoutes />;
}
