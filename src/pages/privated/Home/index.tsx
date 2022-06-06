import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { PrivatedScreen } from "@components";
import { IRecentGames } from "@interfaces";
import { auth, db } from "@services";
import { formatRecentGames } from "@utils";

import * as S from "./styles";

type FormattedRecentGames = {
  name: string;
  items: IRecentGames[];
};

export function Home() {
  const [recentGames, setRecentGames] = useState<FormattedRecentGames[]>();
  const [isFetching, setIsFetching] = useState(true);
  // const navigate = useNavigate();
  const cartCollection = collection(db, "cart");

  useEffect(() => {
    const getData = async () => {
      if (auth.currentUser?.uid) {
        try {
          const { cart } = (
            await getDoc(doc(cartCollection, auth.currentUser.uid))
          ).data() as { cart: IRecentGames[] };

          setRecentGames(formatRecentGames(cart));
        } catch (e) {
          toast.error("An error has occurred.");
        } finally {
          setIsFetching(false);
        }
      }
    };
    getData();
  }, [auth.currentUser]);

  console.log(recentGames);

  if (isFetching) {
    return (
      <PrivatedScreen
        navButtons={[
          { text: "New bet", path: "/new-bet", isHeader: false },
          { text: "Account", path: "/account", isHeader: true },
        ]}
      >
        <S.Container>aaa</S.Container>
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
            <p>Filters</p>
          </section>

          <div>New Bet</div>
        </S.HeaderWrapper>
      </S.Container>
    </PrivatedScreen>
  );
}
