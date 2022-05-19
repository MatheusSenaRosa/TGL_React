import { Loading, PublicScreen } from "@components";
import * as S from "./styles";

export const LoadingPage = () => {
  return (
    <PublicScreen>
      <S.Container>
        <Loading size={90} />
      </S.Container>
    </PublicScreen>
  );
};
