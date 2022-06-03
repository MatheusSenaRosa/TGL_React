import { css, keyframes } from "styled-components";

export const slideXInCart = keyframes`
    ${css`
      0% {
        transform: translateX(-150px);
        opacity: 0;
      }
      80% {
        transform: translateX(20px);
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    `}
`;

export const slideXOutCart = keyframes`
    ${css`
      to {
        opacity: 0;
        transform: translateX(-100%);
      }
    `}
`;
