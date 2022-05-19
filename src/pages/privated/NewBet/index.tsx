import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { PrivatedScreen } from "@components";
import { db } from "@services";
import { IGames } from "@interfaces";

import * as S from "./styles";

export const NewBet = () => {
  const [games, setGames] = useState<IGames[] | null>(null);
  const navigate = useNavigate();

  const gamesCollection = collection(db, "games");

  useEffect(() => {
    const get = async () => {
      try {
        const data = await getDocs(gamesCollection);
        const formatedData = data.docs.map((doc) => ({ ...doc.data() }));
        setGames(formatedData as IGames[]);
      } catch (e) {
        navigate("/");
        toast.error("An error has occurred.");
      }
    };
    get();
  }, []);

  if (!games) return null;

  return (
    <PrivatedScreen
      navButtons={[
        { text: "Home", path: "/", isHeader: true },
        { text: "Account", path: "/account", isHeader: true },
      ]}
    >
      <S.Container>
        <S.LeftContent>
          <S.Title>
            NEW BET <span>FOR MEGA-SENA</span>
          </S.Title>

          <S.ChooseGameWrapper>
            <h3>Choose a game</h3>
            <div>
              {games.map((item) => (
                <S.ChooseGameButton type="button" color={item.color}>
                  {item.name}
                </S.ChooseGameButton>
              ))}
            </div>
          </S.ChooseGameWrapper>
        </S.LeftContent>
      </S.Container>
    </PrivatedScreen>
  );
};
