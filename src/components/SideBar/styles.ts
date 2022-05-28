import { rem, rgba } from "polished";
import styled, { css } from "styled-components";

import { fadeIn, slideXIn, slideXOut, fadeOut } from "@animations";

export const Overlay = styled.div<{ isClosing: boolean }>`
  ${({ isClosing }) => css`
    background-color: ${rgba("#000", 0.5)};
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;

    animation: ${isClosing ? fadeOut : fadeIn} 0.6s forwards;
  `}
`;

export const ActionButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      color: ${theme.colors.text.primary};
      background-color: transparent;
      border: none;
    }

    button:nth-child(2) {
      color: ${theme.colors.error};
      display: flex;
      flex-direction: column;
      font-size: ${rem(16)};
      font-weight: bold;
      align-items: center;
      gap: ${rem(3)};
    }
  `}
`;

export const Aside = styled.aside<{ isClosing: boolean }>`
  ${({ theme, isClosing }) => css`
    width: ${rem(200)};
    height: 100%;

    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    padding: ${rem(21)} ${rem(9)} ${rem(10)} ${rem(9)};

    background-color: ${theme.colors.background.body};
    border: ${rem(2)} solid ${theme.colors.primary};
    border-radius: 0 ${rem(20)} ${rem(20)} 0;

    animation: ${isClosing ? slideXOut : slideXIn} 0.6s forwards;

    display: flex;
  `}
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    margin-top: ${rem(35)};
    margin-right: ${rem(20)};
    flex: 1;
    display: flex;
    justify-content: center;

    ul {
      display: flex;
      flex-direction: column;
      gap: ${rem(8)};
    }

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: ${theme.colors.text.primary};
      font-size: ${rem(20)};
      font-weight: bold;

      gap: ${rem(10)};
    }
  `}
`;
