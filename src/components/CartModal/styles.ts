import { rem, rgba } from "polished";
import styled, { css } from "styled-components";

import { slideYIn, slideYOut, fadeIn, fadeOut } from "@animations";

export const Container = styled.section`
  position: absolute;
  z-index: 1;

  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: flex-end;
`;

export const Overlay = styled.div<{ isClosing: boolean }>`
  ${({ isClosing }) => css`
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: ${rgba("#000", 0.5)};

    animation: ${isClosing ? fadeOut : fadeIn} 0.5s forwards;
  `}
`;

export const Modal = styled.div<{ isClosing: boolean }>`
  ${({ theme, isClosing }) => css`
    width: 100%;
    height: 60vh;
    z-index: 2;
    background-color: ${theme.colors.background.body};
    border-radius: 10% 10% 0 0;

    padding-top: ${rem(15)};
    display: flex;
    flex-direction: column;
    position: relative;

    animation: ${isClosing ? slideYOut : slideYIn} 0.5s forwards;
  `}
`;

export const XButton = styled.button<{ color: string }>`
  ${({ color }) => css`
    border: none;
    width: fit-content;
    background-color: transparent;
    display: flex;
    color: ${color};
    position: absolute;
    left: ${rem(20)};
    cursor: pointer;
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${rem(10)};
    padding-bottom: ${rem(20)};
    border-bottom: ${rem(1)} solid ${theme.colors.border.primary};

    h2 {
      color: ${theme.colors.text.primary};
      font-size: ${rem(26)};
    }
  `}
`;

export const TotalWrapper = styled.div`
  ${({ theme }) => css`
    margin: ${rem(10)} 0;

    text-align: center;

    font-size: ${rem(20)};
    font-weight: bold;
    color: ${theme.colors.text.primary};

    span {
      font-weight: normal;
    }
  `}
`;

export const SubmitButton = styled.button<{ color: string }>`
  ${({ theme, color }) => css`
    color: ${color};
    font-weight: bold;
    height: ${rem(70)};
    border: none;
    font-size: ${rem(25)};
    cursor: pointer;
    border-top: ${rem(1)} solid ${theme.colors.border.primary};
    background-color: ${theme.colors.background.body};

    transition: all 0.3s;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${rem(9)};

    :disabled {
      cursor: not-allowed;
    }

    :not(:disabled):hover {
      background-color: ${color};
      color: ${theme.colors.background.body};
    }
  `}
`;
