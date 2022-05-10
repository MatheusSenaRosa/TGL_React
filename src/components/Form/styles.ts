import styled, { css } from "styled-components";
import { rem } from "polished";
import { Link } from "react-router-dom";
import { formSlideIn } from "@animations";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 95%;
  max-width: ${rem(352)};

  animation: ${formSlideIn} ease-out 0.3s;

  @media (max-width: ${rem(768)}) {
    margin-bottom: ${rem(30)};
  }
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
    font-size: ${rem(35)};
    font-weight: bold;

    margin-bottom: ${rem(26)};

    @media (max-width: ${rem(768)}) {
      font-size: ${rem(30)};
    }

    @media (max-width: ${rem(425)}) {
      font-size: ${rem(25)};
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;
    border: ${rem(1)} solid ${theme.colors.form.border};
    border-radius: ${rem(14)};
    background-color: ${theme.colors.form.background};

    box-shadow: 0px 3px 25px #00000014;

    display: flex;
    flex-direction: column;

    input:first-child {
      border-radius: ${rem(14)} ${rem(14)} 0 0;
    }
  `}
`;

export const ForgotPassword = styled(Link)`
  ${({ theme }) => css`
    align-self: flex-end;
    margin: ${rem(27)} ${rem(27)} ${rem(22)} 0;

    color: ${theme.colors.form.forgotPassword};
    font-size: ${rem(17)};
    transition-duration: 0.3s;

    &&:hover {
      color: ${theme.colors.primary};
      text-decoration: underline;
    }
  `}
`;

export const SubmitButton = styled.button`
  ${({ theme }) => css`
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition-duration: 0.3s;

    font-size: ${rem(35)};
    font-weight: bold;
    color: ${theme.colors.primary};

    height: ${rem(100)};
    border-radius: 0 0 ${rem(14)} ${rem(14)};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${rem(15)};

    outline-color: ${theme.colors.primary};

    &&:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.form.buttonTextHover};
    }

    @media (max-width: ${rem(768)}) {
      font-size: ${rem(30)};
    }

    @media (max-width: ${rem(425)}) {
      font-size: ${rem(25)};
    }
  `}
`;

export const OutsideButton = styled(Link)`
  ${({ theme }) => css`
    margin-top: ${rem(30)};

    color: ${theme.colors.text.primary};
    font-size: ${rem(35)};
    font-weight: bold;

    display: flex;
    align-items: center;

    outline-color: ${theme.colors.text.primary};

    display: flex;
    gap: ${rem(15)};

    @media (max-width: ${rem(768)}) {
      font-size: ${rem(30)};
    }

    @media (max-width: ${rem(425)}) {
      font-size: ${rem(25)};
    }
  `}
`;
