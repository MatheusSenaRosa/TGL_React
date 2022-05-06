import { Screen, ToastPortal } from "@components/index";

import LoggedInRoutes from "./LoggedIn.routes";
import NotLoggedInRoutes from "./NotLoggedIn.routes";

const AppRoutes = () => {
  const isToken = localStorage.getItem("@token");

  return (
    <Screen>
      <ToastPortal />
      {isToken && <LoggedInRoutes />}
      {!isToken && <NotLoggedInRoutes />}
    </Screen>
  );
};

export default AppRoutes;
