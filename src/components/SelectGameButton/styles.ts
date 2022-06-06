import { rem } from "polished";
import styled, { css } from "styled-components";

export const Button = styled.button<{ isActive: boolean; color: string }>`
  ${({ theme, color, isActive }) => css`
    cursor: pointer;
    border: ${rem(2)} solid ${color};
    min-width: ${rem(113)};
    height: ${rem(34)};
    border-radius: ${rem(100)};
    font-size: ${rem(14)};
    font-weight: bold;
    color: ${color};
    transition: 0.3s;

    ${!isActive &&
    css`
      background-color: transparent;

      :hover {
        background-color: ${color};
        color: ${theme.colors.background.body};
      }
    `}

    ${isActive &&
    css`
      background-color: ${color};
      color: ${theme.colors.background.highlight};
    `}
  `}
`;
