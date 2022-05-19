import { ReactNode, useState } from "react";
import { ArrowRight, List } from "phosphor-react";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";

import { auth } from "@services";
import { SideBar, NavButtonsType } from "@components";

import * as S from "./styles";

type Props = {
  children: ReactNode;
  navButtons: NavButtonsType[];
};

export const PrivatedScreen = ({ children, navButtons }: Props) => {
  const [isSideBar, setIsSideBar] = useState(false);

  const logOut = async () => {
    try {
      await signOut(auth);
      toast.success("You`ve logged out.");
    } catch (e) {
      toast.success("An error has occurred.");
    }
  };

  return (
    <>
      {isSideBar && (
        <SideBar
          onClose={() => setIsSideBar(false)}
          onLogout={logOut}
          navButtons={navButtons}
        />
      )}
      <S.Container>
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
        {children}
      </S.Container>
    </>
  );
};
