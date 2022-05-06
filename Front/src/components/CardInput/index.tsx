import { InputHTMLAttributes } from "react";
import * as S from "./styles";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const CardInput = ({ ...rest }: Props) => {
  return <S.InputElement {...rest} />;
};
