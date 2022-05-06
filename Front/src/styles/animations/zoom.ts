import { keyframes } from "styled-components";

export const zoomIn = keyframes`
  0% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1.2, 1.2);
  }
`;

export const zoomOut = keyframes`
  0% {
      transform: scale(1.2, 1.2);
    }
    100% {
      transform: scale(1, 1);
  }
`;
