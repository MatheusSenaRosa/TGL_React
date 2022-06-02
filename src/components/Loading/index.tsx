import * as S from "./styles";

type Props = {
  size?: number;
  color?: string;
};

export function Loading({ size = 40, color }: Props) {
  return <S.Container size={size} color={color} />;
}
