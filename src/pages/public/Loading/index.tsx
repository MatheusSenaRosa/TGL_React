import { Loading, Screen } from "@components";
import * as S from "./styles";

export const LoadingPage = () => {
  return (
    <Screen>
      <S.Container>
        <Loading size={90} />
      </S.Container>
    </Screen>
  );
};
