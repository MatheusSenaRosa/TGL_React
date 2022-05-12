import { useContext } from "react";
import { AuthContext } from "@context";
import { LoadingPage } from "@pages";

import { NotLogged } from "./NotLogged.routes";
import { Logged } from "./Logged.routes";

type Props = {
  isLoading: boolean;
};

export const Routes = ({ isLoading }: Props) => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          {!user && <NotLogged />}
          {user && <Logged />}
        </>
      )}
    </>
  );
};
