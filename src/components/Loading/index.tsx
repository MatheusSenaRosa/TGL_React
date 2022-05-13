import * as S from "./styles";

type Props = {
  size?: number;
};

export const Loading = ({ size = 40 }: Props) => <S.Container size={size} />;
