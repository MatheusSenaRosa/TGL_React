import { Logo, Screen } from "@components";
import { ArrowLeft } from "phosphor-react";
import * as S from "./styles";

export function NotFound() {
  return (
    <Screen>
      <S.Container>
        <Logo />
        <div>
          <S.NotFoundTitle>Page not found</S.NotFoundTitle>

          <S.HomeLink to="/" replace>
            <ArrowLeft weight="bold" />
            Home
          </S.HomeLink>
        </div>
      </S.Container>
    </Screen>
  );
}
