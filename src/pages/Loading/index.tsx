import { Loading, Screen } from "@components";
import * as S from "./styles";

export const LoadingPage = () => {
  return (
    <Screen>
      <S.Container>
        <Loading />
      </S.Container>
    </Screen>
  );
};
