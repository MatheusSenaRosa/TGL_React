import { collection, getDoc, doc } from "firebase/firestore";
import { ShoppingCart } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Cart, CartModal, Loading, PrivatedScreen } from "@components";
import { IGame, IGames } from "@interfaces";
import { db } from "@services";
import { useCartStore } from "@store";
import { formatNumericArray, numberToString } from "@utils";

import * as S from "./styles";

type CurrentBet = {
  game: IGame;
  selectedNumbers: string[];
};

export function NewBet() {
  const [gamesData, setGamesData] = useState<IGames>({} as IGames);
  const [numericArray, setNumericArray] = useState<string[]>([]);
  const [currentBet, setCurrentBet] = useState<CurrentBet>({} as CurrentBet);
  const [isCartModal, setIsCartModal] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const navigate = useNavigate();
  const { cart, addToCart } = useCartStore();
  const gamesCollection = collection(db, "games");

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = (
          await getDoc(doc(gamesCollection, "data"))
        ).data() as IGames;

        setGamesData(response);
        setCurrentBet({
          game: response.games[0],
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
    const { selectedNumbers } = currentBet;
    const { max_number, range } = currentBet.game;
    const missing = max_number - selectedNumbers.length;

    if (selectedNumbers.length === max_number) {
      toast.dismiss();
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
        toast.dismiss();
        toast.warn("This game already exists in your cart.");
        return;
      }
    }

    toast.dismiss();
    addToCart({ id, color, price, numbers: currentBet.selectedNumbers, name });
    setCurrentBet((prev) => ({ ...prev, selectedNumbers: [] }));
    toast.success("Added successfully.");
  };

  if (!gamesData.games) {
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
    <>
      {isCartModal && (
        <CartModal
          onClose={() => setIsCartModal(false)}
          color={currentBet.game.color}
        />
      )}
      <PrivatedScreen
        navButtons={[
          { text: "Home", path: "/", isHeader: true },
          { text: "Account", path: "/account", isHeader: true },
        ]}
      >
        <S.OpenCartButton onClick={() => setIsCartModal(true)}>
          <span>{numberToString(cart.length)}</span>
          <ShoppingCart size={35} />
        </S.OpenCartButton>

        <S.Container>
          <S.Content>
            <S.Title>
              NEW BET <span>FOR {currentBet.game.name}</span>
            </S.Title>

            <S.ChooseGameWrapper>
              <h3>Choose a game</h3>
              <div>
                {gamesData.games.map((game) => (
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
              <button
                type="button"
                onClick={addToCartHandler}
                disabled={isFetching}
              >
                <ShoppingCart size={29} />
                Add to cart
              </button>
            </S.ActionWrapper>
          </S.Content>
          <Cart
            color={currentBet.game.color}
            minValue={gamesData.min_cart_value}
            setFetching={(value: boolean) => setIsFetching(value)}
          />
        </S.Container>
      </PrivatedScreen>
    </>
  );
}
