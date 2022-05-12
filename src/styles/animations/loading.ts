import { keyframes, css } from "styled-components";

export const spinLoading = keyframes`
${css`
  to {
    transform: rotate(360deg);
  }
`}
`;
