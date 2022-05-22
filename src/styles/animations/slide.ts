import { css, keyframes } from "styled-components";

export const slideIn = keyframes`
    ${css`
      from {
        transform: translateX(-100%);
      }
    `}
`;

export const slideOut = keyframes`
    ${css`
      to {
        transform: translateX(-100%);
      }
    `}
`;
