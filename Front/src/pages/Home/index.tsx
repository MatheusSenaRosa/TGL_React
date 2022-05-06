import { FilterButton } from "@components/FilterButton";
import { Loader } from "@components/Loader";
import { LogOutButton } from "@components/LogOutButton";
import { MiniLogo } from "@components/MiniLogo";
import { RecentGameItem } from "@components/RecentGameItem";
import { betsServices, gamesServices } from "@services/index";
import {
  IActionHomePageType,
  IListBetReturn,
  IListGamesReturn,
  IStateHomePage,
} from "@interfaces/index";
import { useEffect, useReducer } from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

import * as S from "./styles";

const initialState: IStateHomePage = {
  betList: [] as IListBetReturn[],
  gamesList: {} as IListGamesReturn,
  filters: [],
};

function reducer(
  state: IStateHomePage,
  action: IActionHomePageType
): IStateHomePage {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        betList: action.betListData,
        gamesList: action.gamesListData,
      };

    case "SET_FILTER":
      if (!state.filters.includes(action.name)) {
        return { ...state, filters: [...state.filters, action.name] };
      } else {
        let newFilters = [...state.filters];
        newFilters.splice(newFilters.indexOf(action.name), 1);

        return {
          ...state,
          filters: newFilters,
        };
      }

    default:
      return state;
  }
}

export const Home = () => {
  const [{ filters, gamesList, betList }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const { listBet } = betsServices();
  const { listGames } = gamesServices();

  useEffect(() => {
    const getData = async () => {
      const betsResponse = await listBet();
      const gamesResponse = await listGames();

      dispatch({
        type: "ADD_DATA",
        betListData: betsResponse,
        gamesListData: gamesResponse,
      });
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectFilterHandler = (name: string) => {
    dispatch({
      type: "SET_FILTER",
      name: name,
    });
  };

  const findColor = (name: string): string => {
    const color = gamesList.types.find((item) => item.type === name)?.color;
    return color || "";
  };

  return (
    <>
      <S.Header>
        <MiniLogo />
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
      {!gamesList.types?.length && (
        <S.LoaderContainer>
          <Loader size="60" />
        </S.LoaderContainer>
      )}

      {gamesList.types?.length && (
        <S.Content>
          <S.FiltersContainer>
            <S.ChooseFilter>
              <h3>RECENT GAMES</h3>
              <h5>Filters</h5>
              <div>
                {gamesList.types.map((item) => (
                  <FilterButton
                    disable={
                      !betList.filter(
                        (filterItem) => filterItem.type.type === item.type
                      ).length
                    }
                    active={filters.includes(item.type)}
                    onClick={onSelectFilterHandler}
                    color={item.color}
                    name={item.type}
                    key={item.id}
                  />
                ))}
              </div>
            </S.ChooseFilter>
            <S.RecentGamesList>
              {betList.length === 0 && (
                <S.NoBetsMessage>
                  No bets. Click on "New bet" button to create a new bet.
                </S.NoBetsMessage>
              )}

              {filters.length === 0 && betList.length > 0
                ? betList.map((item) => (
                    <RecentGameItem
                      color={findColor(item.type.type)}
                      date={item.created_at}
                      name={item.type.type}
                      numbers={item.choosen_numbers}
                      price={item.price}
                      key={item.id}
                    />
                  ))
                : betList
                    .filter((item) => filters.includes(item.type.type))
                    .map((item) => (
                      <RecentGameItem
                        color={findColor(item.type.type)}
                        date={item.created_at}
                        name={item.type.type}
                        numbers={item.choosen_numbers}
                        price={item.price}
                        key={item.id}
                      />
                    ))}
            </S.RecentGamesList>
          </S.FiltersContainer>
          <S.NewBet to="/new-bet">
            New bet
            <S.ArrowIcon>
              <HiArrowRight />
            </S.ArrowIcon>
          </S.NewBet>
        </S.Content>
      )}
    </>
  );
};
