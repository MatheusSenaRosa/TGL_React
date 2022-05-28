import { css, keyframes } from "styled-components";

export const slideYIn = keyframes`
    ${css`
      from {
        transform: translateY(100%);
      }
    `}
`;

export const slideYOut = keyframes`
    ${css`
      to {
        transform: translateY(100%);
      }
    `}
`;
