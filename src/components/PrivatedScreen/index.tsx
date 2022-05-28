import { signOut } from "firebase/auth";
import { ArrowRight, List } from "phosphor-react";
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { SideBar, NavButtonsType, LogoutModal } from "@components";
import { auth } from "@services";

import * as S from "./styles";

type Props = {
  children: ReactNode;
  navButtons: NavButtonsType[];
};

export function PrivatedScreen({ children, navButtons }: Props) {
  const [isSideBar, setIsSideBar] = useState(false);
  const [isLogoutModal, setIsLogoutModal] = useState(false);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/", { replace: true });
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
          onLogout={() => setIsLogoutModal(true)}
          navButtons={navButtons}
        />
      )}
      {isLogoutModal && (
        <LogoutModal
          onConfirm={logout}
          onClose={() => setIsLogoutModal(false)}
        />
      )}
      <S.Container>
        <S.Header>
          <S.MenuButton onClick={() => setIsSideBar(true)}>
            <List />
          </S.MenuButton>
          <S.MiniLogo>TGL</S.MiniLogo>
          <span />
          <S.NavBar
            navButtons={navButtons.filter((item) => item.isHeader).length}
          >
            <ul>
              {navButtons.map(
                (item) =>
                  item.isHeader && (
                    <li key={Math.random()}>
                      <button type="button" onClick={() => navigate(item.path)}>
                        {item.text}
                      </button>
                    </li>
                  )
              )}
              <li>
                <button type="button" onClick={() => setIsLogoutModal(true)}>
                  Log out
                  <ArrowRight weight="bold" size={25} />
                </button>
              </li>
            </ul>
          </S.NavBar>
        </S.Header>
        {children}
        <S.Footer>Copyright 2020 Luby Software</S.Footer>
      </S.Container>
    </>
  );
}
