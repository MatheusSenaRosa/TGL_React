import { FormHTMLAttributes, ReactNode } from "react";
import { ArrowRight, ArrowLeft } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { Loading } from "@components";

import * as S from "./styles";

type Props = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
  title: string;
  buttonText: string;
  goBack?: boolean;
  forgotPassword?: boolean;
  isLoading: boolean;
};

export function Form({
  children,
  title,
  buttonText,
  forgotPassword,
  goBack,
  isLoading,
  ...rest
}: Props) {
  const navigate = useNavigate();

  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
      <S.Form>
        {children}

        {forgotPassword && (
          <S.ForgotPassword to="/forgot-password">
            I Forgot my password
          </S.ForgotPassword>
        )}

        <S.SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? (
            <Loading size={40} />
          ) : (
            <>
              {buttonText} <ArrowRight weight="bold" />
            </>
          )}
        </S.SubmitButton>
      </S.Form>
      {!goBack && (
        <S.OutsideButton to="/registration">
          Sign Up
          <ArrowRight weight="bold" />
        </S.OutsideButton>
      )}
      {goBack && (
        <S.BackButton onClick={() => navigate(-1)}>
          <ArrowLeft weight="bold" />
          Back
        </S.BackButton>
      )}
    </S.Container>
  );
}
