import { Logo, Screen } from "@components";
import * as S from "./styles";

export function NotFound() {
  return (
    <Screen>
      <S.Container>
        <Logo />
        <S.NotFoundTitle>Page not found</S.NotFoundTitle>
      </S.Container>
    </Screen>
  );
}
