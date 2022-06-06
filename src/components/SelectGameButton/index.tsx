import * as S from "./styles";

type Props = {
  color: string;
  text: string;
  isActive: boolean;
  onClick: () => void;
};

export function SelectGameButton({ color, isActive, text, onClick }: Props) {
  return (
    <S.Button type="button" color={color} onClick={onClick} isActive={isActive}>
      {text}
    </S.Button>
  );
}
