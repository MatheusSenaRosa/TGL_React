import { useState } from "react";

import * as S from "./styles";

type Props = {
  onConfirm: () => Promise<void>;
  onClose: () => void;
};

export function LogoutModal({ onClose, onConfirm }: Props) {
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
      <S.Overlay onClick={onCloseHandler} isClosing={isClosing} />
      <S.Modal isClosing={isClosing}>
        <h2>Log out</h2>
        <p>Are you sure?</p>
        <S.ActionWrapper>
          <button type="button" onClick={onCloseHandler}>
            Cancel
          </button>
          <button type="button" onClick={onConfirm}>
            Confirm
          </button>
        </S.ActionWrapper>
      </S.Modal>
    </S.Container>
  );
}
