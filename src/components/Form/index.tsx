import { FormHTMLAttributes, ReactNode } from "react";
import { ArrowRight, ArrowLeft } from "phosphor-react";
import { Loading } from "@components";
import { useChangePageStore } from "@store";

import * as S from "./styles";
import { To, useNavigate } from "react-router-dom";

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
  const { isChanging, setIsChanging } = useChangePageStore();
  const navigate = useNavigate();

  const navigationHandler = (to: string | number) => {
    setIsChanging(true);
    setTimeout(() => {
      setIsChanging(false);
      navigate(to as To);
    }, 200);
  };

  return (
    <S.Container {...rest} isChangingPage={isChanging}>
      <S.Title>{title}</S.Title>
      <S.Form>
        {children}

        {forgotPassword && (
          <S.ForgotPassword
            onClick={() => navigationHandler("/forgot-password")}
            type="button"
          >
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
        <S.OutsideButton
          type="button"
          onClick={() => navigationHandler("/registration")}
        >
          Sign Up
          <ArrowRight weight="bold" />
        </S.OutsideButton>
      )}
      {goBack && (
        <S.BackButton type="button" onClick={() => navigationHandler(-1)}>
          <ArrowLeft weight="bold" />
          Back
        </S.BackButton>
      )}
    </S.Container>
  );
}
