import { useEffect, useReducer, useState } from "react";
import { gamesServices } from "@services/index";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Cart, NumericButton } from "./components";
import {
  FilterButton,
  Loader,
  LogOutButton,
  MiniLogo,
} from "@components/index";

import { useCartStore } from "@store/index";
import { sortAndFormat } from "@utils/index";

import {
  IStateNewBetPage,
  IListGamesReturn,
  ActionNewBetPageType,
  ListGamesType,
} from "@interfaces/index";

import * as S from "./styles";

const initialState: IStateNewBetPage = {
  gamesList: {} as IListGamesReturn,
  selectedGame: {} as ListGamesType,
  selectedNumbers: [],
};

function reducer(
  state: IStateNewBetPage,
  action: ActionNewBetPageType
): IStateNewBetPage {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        gamesList: action.data,
        selectedGame: action.data.types[0],
      };

    case "CLEAR_NUMBERS":
      return { ...state, selectedNumbers: [] };

    case "SET_GAME":
      return {
        ...state,
        selectedGame: action.choosen,
        selectedNumbers: [],
      };

    case "SET_NUMBER":
      return { ...state, selectedNumbers: action.newArray };

    case "REMOVE_NUMBER":
      return { ...state, selectedNumbers: action.newArray };

    default:
      return state;
  }
}

export const NewBet = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [isChangingGame, setIsChangingGame] = useState(false);
  const [{ gamesList, selectedGame, selectedNumbers }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const { listGames } = gamesServices();
  const { addToCart, cart } = useCartStore();

  useEffect(() => {
    const getData = async () => {
      const response = await listGames();

      dispatch({ type: "ADD_DATA", data: response });
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeGameHandler = (name: string) => {
    const foundGame = gamesList.types.find((item) => item.type === name);
    if (name === selectedGame.type) return;
    if (foundGame) {
      setIsChangingGame(true);
      setTimeout(() => {
        dispatch({ type: "SET_GAME", choosen: foundGame });
        setIsChangingGame(false);
      }, 100);
    }
  };

  const renderNumericButtons = (): number[] => {
    let auxArray = Array(selectedGame.range).fill(0);

    return auxArray;
  };

  const onAddNumberHandler = (number: number) => {
    if (selectedNumbers.includes(number)) {
      let aux = [...selectedNumbers];
      aux.splice(aux.indexOf(number), 1);
      dispatch({ type: "REMOVE_NUMBER", newArray: aux });
      return;
    }

    if (selectedNumbers.length === selectedGame.max_number) {
      toast.error(
        `You can't select more than ${selectedGame.max_number} numbers.`
      );
      return;
    }

    if (!selectedNumbers.includes(number)) {
      let aux = [...selectedNumbers];
      aux.push(number);
      dispatch({ type: "SET_NUMBER", newArray: aux });
    }
  };

  const completeGameHandler = () => {
    if (selectedNumbers.length === selectedGame.max_number) {
      toast.error(
        `You can't select more than ${selectedGame.max_number} numbers.`
      );
      return;
    }

    const missingAmount = selectedGame.max_number - selectedNumbers.length;

    let aux = [...selectedNumbers];

    for (let i = 0; i < missingAmount; i++) {
      let randomNumber = Math.ceil(Math.random() * selectedGame.range);
      if (aux.includes(randomNumber)) {
        i--;
      } else {
        aux.push(randomNumber);
      }
    }

    dispatch({ type: "SET_NUMBER", newArray: [...aux] });
  };

  const addToCartHandler = () => {
    const { color, type, id, price } = selectedGame;
    const exists = cart.some(
      (item) =>
        item.numbers === sortAndFormat(selectedNumbers) &&
        item.type === selectedGame.type
    );

    if (exists) return toast.error(`This game already exists in cart.`);

    if (selectedNumbers.length !== selectedGame.max_number)
      return toast.error(`You must select ${selectedGame.max_number} numbers.`);

    addToCart({
      color: color,
      id: id,
      type: type,
      price: price,
      numbers: sortAndFormat([...selectedNumbers]),
    });
    dispatch({ type: "CLEAR_NUMBERS" });
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 300);
  };

  return (
    <>
      <S.Header>
        <div>
          <MiniLogo />
          <Link to="/home">Home</Link>
        </div>
        <S.NavigationMenu>
          <ul>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <LogOutButton />
            </li>
          </ul>
        </S.NavigationMenu>
      </S.Header>
      <S.Content>
        {!gamesList.types?.length && (
          <S.LoaderContainer>
            <Loader size="60" />
          </S.LoaderContainer>
        )}
        {gamesList.types?.length && (
          <S.BetSection isChangingGame={isChangingGame}>
            <h2>
              New bet
              <span>
                for <p>{selectedGame.type}</p>
              </span>
            </h2>
            <S.ChooseGame>
              <h4>Choose a game</h4>
              <div>
                {gamesList?.types.map((item) => (
                  <FilterButton
                    key={item.id}
                    active={selectedGame.type === item.type}
                    color={item.color}
                    name={item.type}
                    onClick={onChangeGameHandler}
                  />
                ))}
              </div>
              <h4>Fill your bet</h4>
              <S.Description>{selectedGame.description}</S.Description>
            </S.ChooseGame>
            <S.NumbersSection color={selectedGame.color}>
              <ul>
                {renderNumericButtons().map((item, index) => (
                  <NumericButton
                    color={selectedGame.color}
                    key={index}
                    number={index + 1}
                    active={selectedNumbers.includes(index + 1)}
                    onAddNumberHandler={onAddNumberHandler}
                  />
                ))}
              </ul>
            </S.NumbersSection>
            <S.ActionButtonsSection>
              <div>
                <button className="completeGame" onClick={completeGameHandler}>
                  Complete game
                </button>
                <button
                  className="clearGame"
                  onClick={() => dispatch({ type: "CLEAR_NUMBERS" })}
                >
                  Clear game
                </button>
              </div>
              <S.AddCartButton onClick={addToCartHandler}>
                <IoCartOutline size={32} />
                Add to cart
              </S.AddCartButton>
            </S.ActionButtonsSection>
          </S.BetSection>
        )}

        <Cart minValue={gamesList.min_cart_value} isAdding={isAdding} />
      </S.Content>
    </>
  );
};
