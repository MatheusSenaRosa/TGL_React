import { HiArrowRight } from "react-icons/hi";

import * as S from "./styles";

export const LogOutButton = () => {
  const onLogOutHandler = () => {
    localStorage.removeItem("@token");
    window.location.reload();
  };

  return (
    <span onClick={onLogOutHandler}>
      Log out
      <S.ArrowIcon>
        <HiArrowRight />
      </S.ArrowIcon>
    </span>
  );
};
