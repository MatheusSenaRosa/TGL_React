import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import { PrivatedScreen } from "@components";
import { auth, db } from "@services";

import * as S from "./styles";

export function Home() {
  // const navigate = useNavigate();
  const cartCollection = collection(db, "cart");

  useEffect(() => {
    const getData = async () => {
      const response = (
        await getDoc(doc(cartCollection, auth.currentUser?.uid))
      ).data();
      console.log(response);
    };
    getData();
  }, []);

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
