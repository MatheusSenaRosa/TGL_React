import { rem, rgba } from "polished";
import styled, { css } from "styled-components";

import { fadeIn, fadeOut, zoomIn, zoomOut } from "@animations";

export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  position: absolute;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div<{ isClosing: boolean }>`
  ${({ isClosing }) => css`
    background-color: ${rgba("#000", 0.5)};
    height: 100%;
    width: 100%;
    position: fixed;

    animation: ${isClosing ? fadeOut : fadeIn} 0.3s forwards;
  `}
`;

export const Modal = styled.div<{ isClosing: boolean }>`
  ${({ theme, isClosing }) => css`
    height: ${rem(230)};
    max-width: ${rem(350)};
    width: 90%;

    z-index: 3;
    background-color: ${theme.colors.background.body};
    border-radius: ${rem(15)};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: ${rem(30)} 0;

    animation: ${isClosing ? zoomOut : zoomIn} 0.3s forwards;

    h2 {
      color: ${theme.colors.text.primary};
      font-size: ${rem(30)};
    }

    p {
      margin: ${rem(20)} 0;
      color: ${theme.colors.text.secondary};
      font-size: ${rem(20)};
    }
  `}
`;

export const ActionWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${rem(20)};

    button:first-child {
      border: ${rem(2)} solid ${theme.colors.error};
      color: ${theme.colors.error};
      :hover {
        background-color: ${theme.colors.error};
        color: ${theme.colors.background.body};
      }
    }

    button {
      cursor: pointer;

      border: ${rem(2)} solid ${theme.colors.primary};
      color: ${theme.colors.primary};
      font-weight: bold;
      font-size: ${rem(16)};
      width: ${rem(100)};
      height: ${rem(35)};
      border-radius: ${rem(10)};
      background-color: transparent;
      transition: 0.3s;

      :hover {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.background.body};
      }
    }
  `}
`;
