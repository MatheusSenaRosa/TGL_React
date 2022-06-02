import { rem } from "polished";
import styled, { css } from "styled-components";

import { spin } from "@animations";

export const Container = styled.main<{ size: number; color?: string }>`
  ${({ theme, size, color }) => css`
    width: ${rem(size)};
    height: ${rem(size)};
    border: ${rem(10)} solid ${theme.colors.border.primary};
    border-top-color: ${color || theme.colors.primary};
    border-radius: 50%;

    animation: ${spin} 1s ease-in-out infinite;
  `}
`;
