import { useState } from "react";

import { X, ArrowRight, ArrowLeft } from "phosphor-react";

import * as S from "./styles";

type Props = {
  onClose: () => void;
  onLogout: () => void;
};

export const SideBar = ({ onClose, onLogout }: Props) => {
  const [isClosing, setIsClosing] = useState(false);

  const onCloseHandler = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 600);
  };

  return (
    <>
      <S.Overlay onClick={onCloseHandler} isClosing={isClosing} />
      <S.Aside isClosing={isClosing}>
        <X size={32} onClick={onCloseHandler} />
        <S.Nav>
          <ul>
            <li>
              <button type="button" onClick={onLogout}>
                <ArrowLeft weight="bold" size={25} />
                Log out
              </button>
            </li>
            <li>
              <button type="button">Account</button>
            </li>
          </ul>
        </S.Nav>
      </S.Aside>
    </>
  );
};
