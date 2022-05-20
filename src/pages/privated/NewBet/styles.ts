import styled, { css } from "styled-components";
import { rem } from "polished";

export const Container = styled.main<{ isLoading?: boolean }>`
  ${({ isLoading }) =>
    css`
      flex: 1;
      padding: 0 ${rem(185)};

      ${isLoading &&
      css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}

      @media(max-width: ${rem(1200)}) {
        padding: 0 ${rem(115)};
      }
    `}
`;

export const LeftContent = styled.div`
  margin-top: ${rem(74)};
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${rem(24)};
    font-weight: bold;
    color: ${theme.colors.text.primary};

    span {
      font-weight: 300;
    }
  `}
`;

export const ChooseGameWrapper = styled.section`
  margin-top: ${rem(33)};

  h3 {
    font-size: ${rem(17)};
    font-weight: bold;
    color: #868686;
  }

  div {
    margin-top: ${rem(20)};
    display: flex;
    gap: ${rem(25)};
  }
`;

export const ChooseGameButton = styled.button<{ isActive: boolean }>`
  ${({ theme, color, isActive }) => css`
    cursor: pointer;
    border: ${rem(2)} solid ${color};
    width: ${rem(113)};
    height: ${rem(34)};
    border-radius: ${rem(100)};
    font-size: ${rem(14)};
    font-weight: bold;
    color: ${color};
    transition: 0.3s;

    ${!isActive &&
    css`
      background-color: ${theme.title === "dark" ? "black" : "white"};

      :hover {
        background-color: ${color};
        color: ${theme.colors.background};
      }
    `}

    ${isActive &&
    css`
      background-color: ${color};
      color: ${theme.title === "dark" ? "black" : "white"};
    `}
  `}
`;
