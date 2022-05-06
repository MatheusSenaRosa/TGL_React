import * as S from "./styles";

type Props = {
  name: string;
  color: string;
  active: boolean;
  disable?: boolean;
  onClick: (name: string) => void;
};

export const FilterButton = ({
  name,
  color,
  active,
  disable,
  onClick,
}: Props) => {
  return (
    <S.Button
      disabled={disable}
      disable={disable}
      onClick={() => onClick(name)}
      color={color}
      active={active}
    >
      {name}
    </S.Button>
  );
};
