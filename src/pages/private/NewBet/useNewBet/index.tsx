import { collection, doc, getDoc } from "firebase/firestore";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { IGame, IGames, ICart } from "@interfaces";
import { db } from "@services";
import { formatNumericArray, numberToString } from "@utils";

interface INewBetContext {
  games: IGames;
  isLoading: boolean;
  currentBet: CurrentBet;
  cart: ICart[];
  onClickNumber: (value: string) => void;
  completeGame: () => void;
  clearGame: () => void;
  changeGame: (game: IGame) => void;
  addToCart: () => void;
  clearCart: () => void;
}

type Props = {
  children: ReactNode;
};

type CurrentBet = {
  game: IGame;
  selectedNumbers: string[];
};

export const NewBetContext = createContext<INewBetContext>(
  {} as INewBetContext
);

export function NewBetContextProvider({ children }: Props) {
  const [games, setGames] = useState<IGames>({} as IGames);
  const [currentBet, setCurrentBet] = useState<CurrentBet>({} as CurrentBet);
  const [cart, setCart] = useState<ICart[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const gamesCollection = collection(db, "games");

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = (
        await getDoc(doc(gamesCollection, "data"))
      ).data() as IGames;

      setGames(response);
      setCurrentBet({
        game: response.games[0],
        selectedNumbers: [],
      });
    } catch (e) {
      console.log(e);
      navigate("/");
      toast.error("An error has occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onClickNumber = (value: string) => {
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

  const completeGame = () => {
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

  console.log(cart);

  const clearGame = () =>
    setCurrentBet((prev) => ({ ...prev, selectedNumbers: [] }));

  const addToCart = () => {
    const {
      selectedNumbers,
      game: { max_number, color, id, price, name },
    } = currentBet;
    const missing = max_number - selectedNumbers.length;

    if (missing) {
      toast.dismiss();
      toast.warn(`You need select ${max_number} numbers.`);
      toast.warn(`Missing ${missing} number${missing > 1 ? "s" : ""}.`);
      return;
    }

    if (cart.length) {
      const alreadyExists = cart.some(
        (item) =>
          item.game.id === id &&
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
    setCart((prev) => [
      {
        game: { id, color, price, name },
        numbers: currentBet.selectedNumbers,
      },
      ...prev,
    ]);
    clearGame();
    toast.success("Added successfully.");
  };

  const changeGame = (game: IGame) =>
    setCurrentBet({ game, selectedNumbers: [] });

  const clearCart = () => setCart([]);

  return (
    <NewBetContext.Provider
      value={useMemo(
        () => ({
          games,
          isLoading,
          currentBet,
          cart,
          onClickNumber,
          completeGame,
          clearGame,
          changeGame,
          addToCart,
          clearCart,
        }),
        [
          games,
          isLoading,
          currentBet,
          cart,
          onClickNumber,
          completeGame,
          clearGame,
          changeGame,
          addToCart,
          clearCart,
        ]
      )}
    >
      {children}
    </NewBetContext.Provider>
  );
}

export function useNewBet() {
  const context = useContext(NewBetContext);

  return context;
}
