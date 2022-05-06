import { ButtonHTMLAttributes } from "react";

import { Loader } from "..";
import * as S from "./styles";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  isLoading: boolean;
};

export const FormButton = ({ text, isLoading, ...rest }: Props) => {
  if (isLoading) {
    return (
      <S.ButtonElement {...rest} isLoading={true} disabled>
        <Loader />
      </S.ButtonElement>
    );
  } else {
    return (
      <S.ButtonElement {...rest} isLoading={false}>
        {text}
        <S.ArrowRightIcon />
      </S.ButtonElement>
    );
  }
};
