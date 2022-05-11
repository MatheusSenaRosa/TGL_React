import * as S from "./styles";

export const Home = () => {
  const logOut = () => {
    localStorage.removeItem("user");
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
