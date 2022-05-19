import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, ArrowLeft } from "phosphor-react";

import * as S from "./styles";

export type NavButtonsType = {
  text: string;
  path: string;
};

type Props = {
  navButtons: NavButtonsType[];
  onClose: () => void;
  onLogout: () => void;
};

export const SideBar = ({ navButtons, onClose, onLogout }: Props) => {
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
            {navButtons.map((item) => (
              <li>
                <button type="button" onClick={() => navigate(item.path)}>
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </S.Nav>
      </S.Aside>
    </>
  );
};
