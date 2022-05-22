import { Loading, PublicScreen } from "@components";

import * as S from "./styles";

export function LoadingPage() {
  return (
    <PublicScreen>
      <S.Container>
        <Loading size={90} />
      </S.Container>
    </PublicScreen>
  );
}
