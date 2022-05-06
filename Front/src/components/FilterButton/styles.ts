import styled, { css } from "styled-components";

type ButtonProps = {
  color: string;
  active: boolean;
  disable?: boolean;
};

export const Button = styled.button<ButtonProps>`
  ${({ active, color, disable }) => css`
    height: 34px;
    min-width: 113px;

    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    color: ${color};

    background-color: white;
    border: 2px solid ${color};
    border-radius: 100px;

    cursor: pointer;
    transition-duration: 0.3s;

    ${disable &&
    css`
      border-color: gray;
      color: gray;
      opacity: 0.7;
      cursor: default;
    `}

    ${() => {
      if (active) {
        return css`
          color: white;
          background-color: ${color};
        `;
      }
      if (!active && !disable) {
        return css`
          &&:hover {
            background-color: ${color};
            color: white;
          }
        `;
      }
    }}
  `}
`;
