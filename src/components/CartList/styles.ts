import { rem, shade } from "polished";
import styled, { css } from "styled-components";

import { slideXInCart, slideXOutCart } from "@animations";

export const List = styled.ul<{
  isEmpty: boolean;
  color: string;
}>`
  ${({ color, isEmpty, theme }) => css`
    overflow-x: hidden;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    gap: ${rem(32)};

    ${isEmpty &&
    css`
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: ${rem(25)};
      color: ${theme.colors.error};
    `}
    ::-webkit-scrollbar {
      width: ${rem(5)};
      height: 1 ${rem(0)};
      border-radius: ${rem(5)};
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: ${color};
      border-radius: ${rem(5)};
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${shade(0.3, color!)};
    }
  `}
`;

export const Item = styled.li<{ color: string; isRemoving: boolean }>`
  ${({ theme, color, isRemoving }) => css`
    display: flex;
    position: relative;
    gap: ${rem(12)};
    padding: ${rem(15)} 0;

    animation: ${isRemoving ? slideXOutCart : slideXInCart} 0.3s forwards;

    div:first-child {
      min-width: 14%;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        background-color: ${color};
        position: absolute;
        left: 13%;
        height: 100%;
        width: ${rem(4)};
        border-radius: ${rem(100)} 0 0 ${rem(100)};
      }

      button {
        margin-right: ${rem(4)};
        background-color: transparent;
        border: none;
        color: ${theme.colors.text.secondary};
        cursor: pointer;

        :hover {
          color: ${theme.colors.error};
        }
      }
    }

    div:last-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: ${rem(6)};
      padding-right: ${rem(10)};

      p {
        line-height: ${rem(22)};
        font-size: ${rem(17)};
        font-weight: bold;
        color: ${theme.colors.text.secondary};
      }

      h4 {
        margin-top: ${rem(4)};
        font-size: ${rem(18)};
        font-weight: bold;
        color: ${color};

        span {
          color: ${theme.colors.text.secondary};
          font-weight: normal;
        }
      }
    }
  `}
`;
