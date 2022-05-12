import { auth } from "@services";
import { signOut } from "firebase/auth";
import * as S from "./styles";

export const Home = () => {
  const logOut = async () => {
    await signOut(auth);
    location.reload();
  };

  return (
    <S.Container>
      <h1 style={{ color: "yellow" }}>Home</h1>
      <button type="button" onClick={logOut} style={{ color: "blue" }}>
        sair
      </button>
    </S.Container>
  );
};
