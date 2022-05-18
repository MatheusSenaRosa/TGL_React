import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { ArrowRight, List } from "phosphor-react";
import { collection, getDocs } from "firebase/firestore";

import { auth, db } from "@services";
import { SideBar } from "@components";

import * as S from "./styles";

export const Home = () => {
  const [isSideBar, setIsSideBar] = useState(false);
  const gamesCollection = collection(db, "games");

  const logOut = async () => {
    try {
      await signOut(auth);
      toast.success("You`ve logged out.");
    } catch (e) {
      toast.success("An error has occurred.");
    }
  };

  useEffect(() => {
    const get = async () => {
      const data = await getDocs(gamesCollection);
      console.log(data.docs.map((doc) => ({ ...doc.data() })));
    };
    get();
  }, []);

  return (
    <>
      {isSideBar && (
        <SideBar onClose={() => setIsSideBar(false)} onLogout={logOut} />
      )}
      <S.Screen>
        <S.Header>
          <S.MenuButton onClick={() => setIsSideBar(true)}>
            <List />
          </S.MenuButton>
          <S.MiniLogo>TGL</S.MiniLogo>
          <span />
          <S.NavBar>
            <ul>
              <li>
                <button>Account</button>
              </li>
              <li>
                <button type="button" onClick={logOut}>
                  Log out
                  <ArrowRight weight="bold" size={25} />
                </button>
              </li>
            </ul>
          </S.NavBar>
        </S.Header>
        <S.Container></S.Container>
      </S.Screen>
    </>
  );
};
