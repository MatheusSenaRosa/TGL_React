import styled, { css } from "styled-components";
import { rem } from "polished";
import { fadeOut, slideIn } from "@animations";

export const Container = styled.section<{ isChangingPage: boolean }>`
  ${({ isChangingPage }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 97%;
    max-width: ${rem(352)};

    ${isChangingPage
      ? css`
          animation: ${fadeOut} ease-in-out 0.2s forwards;
        `
      : css`
          animation: ${slideIn} ease-out 0.2s;
        `}

    @media (max-width: ${rem(768)}) {
      margin-bottom: ${rem(30)};
    }
  `}
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
    border: ${rem(1)} solid ${theme.colors.border.form};
    border-radius: ${rem(14)};
    background-color: ${theme.colors.background.form};

    box-shadow: 0px 3px 25px #00000014;

    display: flex;
    flex-direction: column;

    > input:first-child {
      border-radius: ${rem(14)} ${rem(14)} 0 0;
    }

    > div:first-child {
      input {
        border-radius: ${rem(14)} ${rem(14)} 0 0;
      }
    }
  `}
`;

export const ForgotPassword = styled.button`
  ${({ theme }) => css`
    align-self: flex-end;
    margin: ${rem(27)} ${rem(27)} ${rem(22)} 0;
    background-color: transparent;
    border: none;
    cursor: pointer;

    color: ${theme.colors.text.forgotPassword};
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

    cursor: not-allowed;

    &&:not(:disabled) {
      cursor: pointer;

      &&:hover {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.background.body};
      }
    }

    @media (max-width: ${rem(768)}) {
      font-size: ${rem(30)};
    }

    @media (max-width: ${rem(425)}) {
      font-size: ${rem(25)};
    }
  `}
`;

export const NavigationButton = styled.button`
  ${({ theme }) => css`
    margin-top: ${rem(30)};

    color: ${theme.colors.text.primary};
    font-size: ${rem(35)};
    font-weight: bold;
    background-color: transparent;
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;

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

export const BackButton = styled.button`
  ${({ theme }) => css`
    margin-top: ${rem(30)};

    color: ${theme.colors.text.primary};
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: ${rem(35)};
    font-weight: bold;

    display: flex;
    align-items: center;

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
