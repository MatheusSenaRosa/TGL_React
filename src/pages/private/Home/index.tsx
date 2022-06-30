import { ArrowRight } from "phosphor-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Loading, PrivatedScreen, SelectGameButton } from "@components";
import { IFilterButton, IRecentGames } from "@interfaces";
import { auth, getRecentGamesCollection } from "@services";
import { formatPrice, getFilterButtons } from "@utils";

import * as S from "./styles";

export function Home() {
  const [isFetching, setIsFetching] = useState(true);
  const [recentGames, setRecentGames] = useState<IRecentGames[]>([]);
  const [filters, setFilters] = useState<number[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      if (auth.currentUser?.uid) {
        try {
          const response = await getRecentGamesCollection();

          setRecentGames(response.games);
        } catch ({ message }) {
          if (
            message === "Cannot read properties of undefined (reading 'games')"
          )
            return;

          toast.error("An error has occurred.");
        } finally {
          setIsFetching(false);
        }
      }
    };
    getData();
  }, [auth.currentUser]);

  const filterButtons: IFilterButton[] = useMemo(
    () => getFilterButtons(recentGames),
    [recentGames]
  );

  const filteredGames = useMemo(() => {
    if (!filters.length) return [];

    const filtered = recentGames.filter((item) =>
      filters.includes(item.game.id)
    );
    return filtered;
  }, [filters]);

  const filterHandler = (id: number) => {
    const index = filters.indexOf(id);
    if (index !== -1) {
      setFilters((prev) => {
        const newFilters = [...prev];
        newFilters.splice(index, 1);
        return newFilters;
      });
      return;
    }
    setFilters((prev) => [...prev, id]);
  };

  if (isFetching) {
    return (
      <PrivatedScreen
        navButtons={[
          { text: "New bet", path: "/new-bet", isHeader: false },
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
        { text: "New bet", path: "/new-bet", isHeader: false },
        { text: "Account", path: "/account", isHeader: true },
      ]}
    >
      <S.Container>
        <S.HeaderWrapper>
          <section>
            <h2>RECENT GAMES</h2>
            {filterButtons.length && <p>Filters</p>}
            <S.FiltersWrapper>
              {filterButtons.map((item) => (
                <SelectGameButton
                  key={item.name}
                  color={item.color}
                  isActive={filters.includes(item.id)}
                  text={item.name}
                  onClick={() => filterHandler(item.id)}
                />
              ))}
            </S.FiltersWrapper>
          </section>
          <S.NewBetButton type="button" onClick={() => navigate("/new-bet")}>
            New Bet <ArrowRight weight="bold" size={25} />
          </S.NewBetButton>
        </S.HeaderWrapper>
        <S.ContentWrapper isEmpty={!recentGames.length}>
          {!recentGames.length ? (
            "No games found"
          ) : (
            <ul>
              {!filters.length
                ? recentGames.map(
                    ({ createdAt, game: { name, price, color }, numbers }) => (
                      <S.ItemList color={color} key={numbers.join("")}>
                        <p>{numbers.join(", ")}</p>
                        <h4>
                          {createdAt} - ({formatPrice(price)})
                        </h4>
                        <h3>{name}</h3>
                      </S.ItemList>
                    )
                  )
                : filteredGames.map(
                    ({ createdAt, game: { name, price, color }, numbers }) => (
                      <S.ItemList color={color} key={numbers.join("")}>
                        <p>{numbers.join(", ")}</p>
                        <h4>
                          {createdAt} - ({formatPrice(price)})
                        </h4>
                        <h3>{name}</h3>
                      </S.ItemList>
                    )
                  )}
            </ul>
          )}
        </S.ContentWrapper>
      </S.Container>
    </PrivatedScreen>
  );
}
