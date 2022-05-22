import { useState } from "react";

import * as S from "./styles";

type Props = {
  onClose: () => void;
};

export const LogoutModal = ({ onClose }: Props) => {
  const [isClosing, setIsClosing] = useState(false);

  const onCloseHandler = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  return (
    <S.Container>
      <S.Overlay onClick={onCloseHandler} />
      <S.Modal>
        <h2>Log out</h2>
        <p>Are you sure?</p>
        <S.ActionWrapper>
          <button onClick={onCloseHandler}>Cancel</button>
          <button>Confirm</button>
        </S.ActionWrapper>
      </S.Modal>
    </S.Container>
  );
};
