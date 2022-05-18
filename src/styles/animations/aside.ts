import { css, keyframes } from "styled-components";

export const slideIn = keyframes`
    ${css`
      from {
        transform: translateX(-350px);
      }
    `}
`;

export const slideOut = keyframes`
    ${css`
      to {
        transform: translateX(-350px);
      }
    `}
`;
