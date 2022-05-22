import { useNavigate } from "react-router-dom";

import { PrivatedScreen } from "@components";

import * as S from "./styles";

export function Home() {
  const navigate = useNavigate();

  return (
    <PrivatedScreen
      navButtons={[
        { text: "New bet", path: "/new-bet", isHeader: false },
        { text: "Account", path: "/account", isHeader: true },
      ]}
    >
      <S.Container>
        <button
          type="button"
          style={{ color: "white" }}
          onClick={() => navigate("/new-bet")}
        >
          New bet
        </button>
      </S.Container>
    </PrivatedScreen>
  );
}
