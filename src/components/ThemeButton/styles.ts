import styled, { css } from "styled-components";
import { rem } from "polished";
import { Moon, Sun } from "phosphor-react";
import { rotateIcon } from "@animations";

export const Button = styled.button`
  ${({ theme }) => css`
    width: ${rem(45)};
    height: ${rem(45)};
    background-color: transparent;
    color: ${theme.colors.negative};
    cursor: pointer;
    z-index: 1;

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
