import styled from "styled-components";

export const Element = styled.div<{ size?: string }>`
  width: 40px;
  height: 40px;

  ${({ size }) => {
    if (size)
      return `
        width: ${size}px;
        height: ${size}px;
      `;
  }}

  border: 7px solid #e5e5e5;
  border-top-color: #b5c401;
  border-radius: 50%;

  animation: is-rotating 1s infinite;

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;
