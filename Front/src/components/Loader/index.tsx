import * as S from "./styles";

type Props = {
  size?: string;
};

export const Loader = ({ size }: Props) => {
  return <S.Element size={size} />;
};
