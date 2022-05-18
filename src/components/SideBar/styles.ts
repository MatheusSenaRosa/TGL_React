import { rem, rgba } from "polished";
import styled, { css } from "styled-components";

export const Overlay = styled.div`
  background-color: ${rgba("#000", 0.3)};
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 1;
`;

export const Aside = styled.aside`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${rem(200)};
    height: 100vh;
    position: fixed;
    z-index: 2;

    background-color: ${theme.colors.background};
    border-right: ${rem(2)} solid ${theme.colors.primary};
    border-radius: 0 ${rem(20)} ${rem(20)} 0;
  `}
`;
