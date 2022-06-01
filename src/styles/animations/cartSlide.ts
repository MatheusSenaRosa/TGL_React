import { css, keyframes } from "styled-components";

export const slideInCart = keyframes`
    ${css`
      from {
        opacity: 0;
        transform: translateX(-100%);
      }
    `}
`;

export const slideOutCart = keyframes`
    ${css`
      to {
        opacity: 0;
        transform: translateX(-100%);
      }
    `}
`;
