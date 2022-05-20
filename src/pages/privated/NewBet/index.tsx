import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { Loading, PrivatedScreen } from "@components";
import { db } from "@services";
import { IGame } from "@interfaces";

import * as S from "./styles";

export const NewBet = () => {
  const [games, setGames] = useState<IGame[] | null>(null);
  const [gameSelected, setGameSelected] = useState<IGame | null>(null);
  const navigate = useNavigate();
  const gamesCollection = collection(db, "games");

  useEffect(() => {
    const get = async () => {
      try {
        const data = await getDocs(gamesCollection);
        const formatedData = data.docs.map((doc) => ({ ...doc.data() }));
        setGames(formatedData as IGame[]);
        setGameSelected(formatedData[0] as IGame);
      } catch (e) {
        navigate("/");
        toast.error("An error has occurred.");
      }
    };
    get();
  }, []);

  if (!games) {
    return (
      <PrivatedScreen
        navButtons={[
          { text: "Home", path: "/", isHeader: true },
          { text: "Account", path: "/account", isHeader: true },
        ]}
      >
        <S.Container isLoading>
          <Loading size={80} />
        </S.Container>
      </PrivatedScreen>
    );
  }

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
            NEW BET <span>FOR {gameSelected?.name}</span>
          </S.Title>

          <S.ChooseGameWrapper>
            <h3>Choose a game</h3>
            <div>
              {games.map((game) => (
                <S.ChooseGameButton
                  type="button"
                  color={game.color}
                  key={game.id}
                  isActive={gameSelected?.id === game.id}
                  onClick={() => setGameSelected(game)}
                >
                  {game.name}
                </S.ChooseGameButton>
              ))}
            </div>

            <S.DescriptionWrapper>
              <h3>Fill your bet</h3>
              <p>{gameSelected?.description}</p>
            </S.DescriptionWrapper>
          </S.ChooseGameWrapper>
        </S.LeftContent>
      </S.Container>
    </PrivatedScreen>
  );
};
