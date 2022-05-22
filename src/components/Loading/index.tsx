import * as S from "./styles";

type Props = {
  size?: number;
};

export function Loading({ size = 40 }: Props) {
  return <S.Container size={size} />;
}
