import { X, SignOut } from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Portal } from "@components";

import * as S from "./styles";

export type NavButtonsType = {
  text: string;
  path: string;
  isHeader: boolean;
};

type Props = {
  navButtons: NavButtonsType[];
  onClose: () => void;
  onLogout: () => void;
};

export function SideBar({ navButtons, onClose, onLogout }: Props) {
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

  const onCloseHandler = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 600);
  };

  return (
    <Portal id="sidebar">
      <S.Overlay onClick={onCloseHandler} isClosing={isClosing} />
      <S.Aside isClosing={isClosing}>
        <S.ActionButtons>
          <button type="button">
            <X size={32} onClick={onCloseHandler} />
          </button>
          <button type="button">
            <SignOut size={32} onClick={onLogout} weight="bold" />
            Log out
          </button>
        </S.ActionButtons>
        <S.Nav>
          <ul>
            {navButtons.map((item) => (
              <li key={item.text}>
                <button type="button" onClick={() => navigate(item.path)}>
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </S.Nav>
      </S.Aside>
    </Portal>
  );
}
