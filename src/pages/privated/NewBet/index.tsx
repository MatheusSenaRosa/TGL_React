import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { ShoppingCart } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Cart, Loading, PrivatedScreen } from "@components";
import { IGame } from "@interfaces";
import { db } from "@services";

import * as S from "./styles";

export function NewBet() {
  const [games, setGames] = useState<IGame[] | null>(null);
  const [numericArray, setNumericArray] = useState<number[]>([]);
  const [gameSelected, setGameSelected] = useState<IGame>({} as IGame);
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

  useEffect(() => {
    if (gameSelected.id) {
      const array = [];
      for (let i = 1; i <= gameSelected?.range; i += 1) {
        array.push(i);
      }
      setNumericArray([...array]);
    }
  }, [gameSelected]);

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
        <S.Content>
          <S.Title>
            NEW BET <span>FOR {gameSelected.name}</span>
          </S.Title>

          <S.ChooseGameWrapper>
            <h3>Choose a game</h3>
            <div>
              {games.map((game) => (
                <S.ChooseGameButton
                  type="button"
                  color={game.color}
                  key={game.id}
                  isActive={gameSelected.id === game.id}
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

          <S.NumbersWrapper color={gameSelected.color}>
            <S.ContainerNumbers>
              {numericArray.map((item) => (
                <S.NumericButton color={gameSelected.color} key={item}>
                  {item < 10 ? `0${item}` : item}
                </S.NumericButton>
              ))}
            </S.ContainerNumbers>
          </S.NumbersWrapper>

          <S.ActionWrapper color={gameSelected.color}>
            <span>
              <button type="button">Complete game</button>
              <button type="button">Clear game</button>
            </span>
            <button type="button">
              <ShoppingCart size={29} />
              Add to cart
            </button>
          </S.ActionWrapper>
        </S.Content>
        <Cart color={gameSelected.color} />
      </S.Container>
    </PrivatedScreen>
  );
}
