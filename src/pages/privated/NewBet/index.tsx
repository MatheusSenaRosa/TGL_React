import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { ShoppingCart } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Cart, Loading, PrivatedScreen } from "@components";
import { IGame } from "@interfaces";
import { db } from "@services";
import { useCartStore } from "@store";
import { formatNumericArray, numberToString } from "@utils";

import * as S from "./styles";

type CurrentBet = {
  game: IGame;
  selectedNumbers: string[];
};

export function NewBet() {
  const [games, setGames] = useState<IGame[] | null>(null);
  const [numericArray, setNumericArray] = useState<string[]>([]);
  const [currentBet, setCurrentBet] = useState<CurrentBet>({} as CurrentBet);

  const { cart, addToCart } = useCartStore();
  const navigate = useNavigate();
  const gamesCollection = collection(db, "games");

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getDocs(gamesCollection);
        const formatedData = data.docs.map((doc) => ({ ...doc.data() }));
        setGames(formatedData as IGame[]);
        setCurrentBet({
          game: formatedData[0] as IGame,
          selectedNumbers: [],
        });
      } catch (e) {
        navigate("/");
        toast.error("An error has occurred.");
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    const { game } = currentBet;
    if (game?.id) {
      const array = [];
      for (let i = 1; i <= game.range; i += 1) {
        array.push(numberToString(i));
      }
      setNumericArray([...array]);
    }
  }, [currentBet.game]);

  const onClickNumberHandler = (value: string) => {
    const { selectedNumbers } = currentBet;
    const { max_number } = currentBet.game;

    if (selectedNumbers.includes(value)) {
      setCurrentBet((prev) => ({
        ...prev,
        selectedNumbers: prev.selectedNumbers.filter((item) => item !== value),
      }));
      return;
    }

    if (selectedNumbers.length === max_number) {
      toast.dismiss();
      toast.warn(`You can\`t select more than ${max_number} numbers.`);
      return;
    }

    setCurrentBet((prev) => ({
      ...prev,
      selectedNumbers: [...prev.selectedNumbers, value],
    }));
  };

  const completeGameHandler = () => {
    toast.dismiss();
    const { selectedNumbers } = currentBet;
    const { max_number, range } = currentBet.game;
    const missing = max_number - selectedNumbers.length;

    if (selectedNumbers.length === max_number) {
      toast.warn(`You can\`t select more than ${max_number} numbers.`);
      return;
    }

    const newSelectedNumbers: string[] = [];

    for (let i = 1; i <= missing; i += 1) {
      const randomNumber = numberToString(Math.ceil(Math.random() * range));
      if (!newSelectedNumbers.includes(randomNumber)) {
        newSelectedNumbers.push(randomNumber);
      } else {
        i -= 1;
      }
    }

    setCurrentBet((prev) => ({
      ...prev,
      selectedNumbers: [...prev.selectedNumbers, ...newSelectedNumbers],
    }));
  };

  const addToCartHandler = () => {
    toast.dismiss();
    const {
      selectedNumbers: { length },
      game: { max_number, color, id, price, name },
    } = currentBet;
    const missing = max_number - length;

    if (missing) {
      toast.dismiss();
      toast.warn(`You need select ${max_number} numbers.`);
      toast.warn(`Missing ${missing} number${missing > 1 ? "s" : ""}.`);
      return;
    }

    if (cart.length) {
      const alreadyExists = cart.some(
        (item) =>
          item.id === id &&
          formatNumericArray(item.numbers) ===
            formatNumericArray(currentBet.selectedNumbers)
      );

      if (alreadyExists) {
        toast.warn("This game already exists in your cart.");
        return;
      }
    }

    addToCart({ id, color, price, numbers: currentBet.selectedNumbers, name });
    setCurrentBet((prev) => ({ ...prev, selectedNumbers: [] }));

    toast.success("Added successfully.");
  };

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
      <S.SmallDeviceCart>
        <ShoppingCart size={35} />
      </S.SmallDeviceCart>

      <S.Container>
        <S.Content>
          <S.Title>
            NEW BET <span>FOR {currentBet.game.name}</span>
          </S.Title>

          <S.ChooseGameWrapper>
            <h3>Choose a game</h3>
            <div>
              {games.map((game) => (
                <S.ChooseGameButton
                  type="button"
                  color={game.color}
                  key={game.id}
                  isActive={currentBet.game.id === game.id}
                  onClick={() => setCurrentBet({ game, selectedNumbers: [] })}
                >
                  {game.name}
                </S.ChooseGameButton>
              ))}
            </div>

            <S.DescriptionWrapper>
              <h3>Fill your bet</h3>
              <p>{currentBet.game.description}</p>
            </S.DescriptionWrapper>
          </S.ChooseGameWrapper>

          <S.NumbersWrapper color={currentBet.game.color}>
            <S.ContainerNumbers>
              {numericArray.map((item) => (
                <S.NumericButton
                  color={currentBet.game.color}
                  key={item}
                  isActive={currentBet.selectedNumbers.includes(item)}
                  onClick={() => onClickNumberHandler(item)}
                >
                  {item}
                </S.NumericButton>
              ))}
            </S.ContainerNumbers>
          </S.NumbersWrapper>

          <S.ActionWrapper color={currentBet.game.color}>
            <span>
              <button type="button" onClick={completeGameHandler}>
                Complete game
              </button>
              <button
                type="button"
                onClick={() =>
                  setCurrentBet((prev) => ({ ...prev, selectedNumbers: [] }))
                }
              >
                Clear game
              </button>
            </span>
            <button type="button" onClick={addToCartHandler}>
              <ShoppingCart size={29} />
              Add to cart
            </button>
          </S.ActionWrapper>
        </S.Content>
        <Cart color={currentBet.game.color} />
      </S.Container>
    </PrivatedScreen>
  );
}
