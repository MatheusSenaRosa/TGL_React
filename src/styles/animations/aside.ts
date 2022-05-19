import { css, keyframes } from "styled-components";
import { rem } from "polished";
export const slideIn = keyframes`
    ${css`
      from {
        transform: translateX(${rem(-210)});
      }
    `}
`;

export const slideOut = keyframes`
    ${css`
      to {
        transform: translateX(${rem(-210)});
      }
    `}
`;
