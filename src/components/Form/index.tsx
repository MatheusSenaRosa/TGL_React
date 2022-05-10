import { ReactNode } from "react";
import { ArrowRight, ArrowLeft } from "phosphor-react";

import * as S from "./styles";

type Props = {
  children: ReactNode;
  title: string;
  buttonText: string;
  goBack?: boolean;
  forgotPassword?: boolean;
};

export function Form({
  children,
  title,
  buttonText,
  forgotPassword,
  goBack,
}: Props) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Form>
        {children}

        {forgotPassword && (
          <S.ForgotPassword to="/forgot-password">
            I Forgot my password
          </S.ForgotPassword>
        )}

        <S.SubmitButton>
          {buttonText} <ArrowRight weight="bold" />
        </S.SubmitButton>
      </S.Form>
      {!goBack && (
        <S.OutsideButton to="/registration">
          Sign Up
          <ArrowRight weight="bold" />
        </S.OutsideButton>
      )}
      {goBack && (
        <S.OutsideButton to="/">
          <ArrowLeft weight="bold" />
          Back
        </S.OutsideButton>
      )}
    </S.Container>
  );
}
