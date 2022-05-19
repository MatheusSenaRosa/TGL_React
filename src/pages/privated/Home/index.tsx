import { useNavigate } from "react-router-dom";

import { PrivatedScreen } from "@components";

import * as S from "./styles";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <PrivatedScreen
      navButtons={[
        { text: "New bet", path: "/new-bet", isHeader: false },
        { text: "Account", path: "/account", isHeader: true },
      ]}
    >
      <S.Container>
        <h4 style={{ color: "white" }} onClick={() => navigate("/new-bet")}>
          New bet
        </h4>
      </S.Container>
    </PrivatedScreen>
  );
};
