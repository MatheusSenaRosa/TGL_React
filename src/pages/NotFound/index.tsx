import { Logo, Screen } from "@components";
import * as S from "./styles";

export const NotFound = () => {
  return (
    <Screen>
      <S.Container>
        <Logo />
        <S.NotFoundTitle>Page not found</S.NotFoundTitle>
      </S.Container>
    </Screen>
  );
};
