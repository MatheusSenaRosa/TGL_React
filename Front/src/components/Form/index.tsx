import { FormHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

import { FormButton } from "..";
import * as S from "./styles";

type Props = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
  title: string;
  buttonText: string;
  isLoading: boolean;
  forgotPassword?: boolean;
  outsideButtonText?: string;
  goBack?: boolean;
};

export const Form = ({
  children,
  title,
  forgotPassword,
  buttonText,
  outsideButtonText,
  goBack,
  isLoading,
  ...rest
}: Props) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.FormElement {...rest}>
        {children}

        {forgotPassword && (
          <Link to="/reset-password">I forgot my password</Link>
        )}

        <FormButton text={buttonText} type="submit" isLoading={isLoading} />
      </S.FormElement>

      {goBack && (
        <S.OutsideButton to="/">
          <S.ArrowLeftIcon />
          Back
        </S.OutsideButton>
      )}

      {!goBack && (
        <S.OutsideButton to="/registration">
          {outsideButtonText}
          <S.ArrowRightIcon />
        </S.OutsideButton>
      )}
    </S.Container>
  );
};
