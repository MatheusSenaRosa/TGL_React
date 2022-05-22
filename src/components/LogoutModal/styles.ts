import styled, { css } from "styled-components";
import { rem, rgba } from "polished";
import { fadeIn } from "@animations";

export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  background-color: ${rgba("#000", 0.5)};
  height: 100%;
  width: 100%;
  position: absolute;

  animation: ${fadeIn} 0.3s;
`;

export const Modal = styled.div`
  ${({ theme }) => css`
    height: ${rem(230)};
    width: ${rem(350)};

    z-index: 3;
    background-color: ${theme.colors.background.body};
    border-radius: ${rem(15)};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: ${rem(30)} 0;

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
