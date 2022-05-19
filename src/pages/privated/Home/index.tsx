import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

import { db } from "@services";
import { PrivatedScreen } from "@components";

import * as S from "./styles";

export const Home = () => {
  const navigate = useNavigate();
  const gamesCollection = collection(db, "games");

  useEffect(() => {
    const get = async () => {
      const data = await getDocs(gamesCollection);
      console.log(data.docs.map((doc) => ({ ...doc.data() })));
    };
    get();
  }, []);

  return (
    <PrivatedScreen
      navButtons={[
        { text: "New Bet", path: "/new-bet" },
        { text: "Account", path: "/account" },
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
