import { css, keyframes } from "styled-components";

export const slideXIn = keyframes`
    ${css`
      from {
        transform: translateX(-100%);
      }
    `}
`;

export const slideXOut = keyframes`
    ${css`
      to {
        transform: translateX(-100%);
      }
    `}
`;
