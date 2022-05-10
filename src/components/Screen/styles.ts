import styled, { css } from "styled-components";
import { rotateIcon } from "@animations";
import { Moon, Sun } from "phosphor-react";
import { rem } from "polished";

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    height: ${rem(89)};
    margin-top: auto;
    border-top: ${rem(2)} solid ${theme.colors.footer.border};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: ${rem(15)};
    color: ${theme.colors.text.primary};
  `}
`;

export const SwitchTheme = styled.button`
  ${({ theme }) => css`
    width: ${rem(45)};
    height: ${rem(45)};
    background-color: transparent;
    color: ${theme.colors.negative};
    cursor: pointer;

    border: none;
    border-radius: 50%;

    position: fixed;
    top: ${rem(30)};
    right: ${rem(30)};

    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.3s;

    box-shadow: 0 0 ${rem(8)} ${theme.colors.negative};

    &&:hover {
      background-color: ${theme.colors.negative};
      color: ${theme.colors.background};
    }
  `}
`;

export const MoonIcon = styled(Moon)`
  font-size: ${rem(32)};
  animation: ${rotateIcon} 1s;
`;

export const SunIcon = styled(Sun)`
  font-size: ${rem(32)};
  animation: ${rotateIcon} 1s;
`;
