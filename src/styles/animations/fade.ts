import { css, keyframes } from "styled-components";

export const fadeIn = keyframes`
    ${css`
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    `}
`;

export const fadeOut = keyframes`
    ${css`
      to {
        opacity: 0;
      }
    `}

`;
