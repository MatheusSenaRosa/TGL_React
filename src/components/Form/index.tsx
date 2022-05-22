import { FormHTMLAttributes, ReactNode } from "react";

import { ArrowRight, ArrowLeft } from "phosphor-react";
import { To, useNavigate } from "react-router-dom";

import { Loading } from "@components";
import { useChangePageStore } from "@store";

import * as S from "./styles";

type Props = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
  title: string;
  submitText: string;
  goBack?: boolean;
  forgotPassword?: boolean;
  isLoading: boolean;
  navigationButton?: {
    text: string;
    path: string;
    replace?: boolean;
  };
};

export function Form({
  children,
  title,
  submitText,
  forgotPassword,
  goBack,
  isLoading,
  navigationButton,
  ...rest
}: Props) {
  const { isChanging, setIsChanging } = useChangePageStore();
  const navigate = useNavigate();

  const navigationHandler = (to: string | number, replace = false) => {
    setIsChanging(true);
    setTimeout(() => {
      setIsChanging(false);
      navigate(to as To, { replace });
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
            I forgot my password
          </S.ForgotPassword>
        )}

        <S.SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? (
            <Loading size={40} />
          ) : (
            <>
              {submitText} <ArrowRight weight="bold" />
            </>
          )}
        </S.SubmitButton>
      </S.Form>
      {navigationButton && (
        <S.NavigationButton
          disabled={isLoading}
          type="button"
          onClick={() =>
            navigationHandler(navigationButton.path, navigationButton.replace)
          }
        >
          {navigationButton.text}
          <ArrowRight weight="bold" />
        </S.NavigationButton>
      )}
      {goBack && (
        <S.BackButton
          type="button"
          onClick={() => navigationHandler(-1)}
          disabled={isLoading}
        >
          <ArrowLeft weight="bold" />
          Back
        </S.BackButton>
      )}
    </S.Container>
  );
}
