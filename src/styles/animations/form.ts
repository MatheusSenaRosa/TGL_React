import { rem } from "polished";
import { keyframes, css } from "styled-components";

export const formSlideIn = keyframes`
${css`
  from {
    transform: translateX(${rem(1500)});
  }
`}
`;
