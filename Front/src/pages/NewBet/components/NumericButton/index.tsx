import * as S from "./styles";

type Props = {
  number: number;
  active: boolean;
  color: string;
  onAddNumberHandler: (number: number) => void;
};

export const NumericButton = ({
  number,
  active,
  color,
  onAddNumberHandler,
}: Props) => {
  const formatedNumber = number < 10 ? `0${number}` : number;

  return (
    <S.Container active={active} color={color}>
      <button onClick={() => onAddNumberHandler(number)}>
        {formatedNumber}
      </button>
    </S.Container>
  );
};
