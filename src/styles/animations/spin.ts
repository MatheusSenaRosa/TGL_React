import { keyframes, css } from "styled-components";

export const spin = keyframes`
${css`
  to {
    transform: rotate(360deg);
  }
`}
`;
