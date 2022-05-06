import { forwardRef, InputHTMLAttributes } from "react";

import * as S from "./styles";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  isVisible: boolean;
  changeVisibility: (value: boolean) => void;
};

export const InputPassword = forwardRef(
  ({ changeVisibility, isVisible, ...rest }: Props, ref: any) => {
    return (
      <S.Container>
        <S.InputElement
          placeholder="Password"
          type={isVisible ? "text" : "password"}
          ref={ref}
          {...rest}
          required
        />

        {isVisible && (
          <S.OpenEyeIcon size={30} onClick={() => changeVisibility(false)} />
        )}

        {!isVisible && (
          <S.CloseEyeIcon size={30} onClick={() => changeVisibility(true)} />
        )}
      </S.Container>
    );
  }
);
