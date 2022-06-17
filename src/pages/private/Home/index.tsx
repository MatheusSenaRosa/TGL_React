import { collection, doc, getDoc } from "firebase/firestore";
import { ArrowRight } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Loading, PrivatedScreen, SelectGameButton } from "@components";
import { IFilterButton, IRecentGames } from "@interfaces";
import { auth, db } from "@services";
import { formatPrice, getFilterButtons } from "@utils";

import * as S from "./styles";

export function Home() {
  const [filterButtons, setFilterButtons] = useState<IFilterButton[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [recentGames, setRecentGames] = useState<IRecentGames[]>([]);

  const navigate = useNavigate();
  const cartCollection = collection(db, "cart");

  useEffect(() => {
    const getData = async () => {
      if (auth.currentUser?.uid) {
        try {
          const response = (
            await getDoc(doc(cartCollection, auth.currentUser.uid))
          ).data() as { cart: IRecentGames[] };

          setFilterButtons(getFilterButtons(response.cart));
          setRecentGames(response.cart);
        } catch ({ message }) {
          if (
            message === "Cannot read properties of undefined (reading 'cart')"
          ) {
            return;
          }
          toast.error("An error has occurred.");
        } finally {
          setIsFetching(false);
        }
      }
    };
    getData();
  }, [auth.currentUser]);

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
                  isActive={false}
                  text={item.name}
                  onClick={() => null}
                />
              ))}
            </S.FiltersWrapper>
          </section>
          <S.NewBetButton type="button" onClick={() => navigate("/new-bet")}>
            New Bet <ArrowRight weight="bold" size={25} />
          </S.NewBetButton>
        </S.HeaderWrapper>
        <S.MainWrapper isEmpty={!recentGames.length}>
          {!recentGames.length ? (
            "No games found"
          ) : (
            <ul>
              {recentGames.map(
                ({ createdAt, game: { name, price, color }, numbers }) => (
                  <S.ItemList color={color}>
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
        </S.MainWrapper>
      </S.Container>
    </PrivatedScreen>
  );
}
