import styled, { css } from "styled-components";
import { rem } from "polished";

export const Container = styled.main`
  flex: 1;
`;

export const LeftContent = styled.div`
  padding: 0 ${rem(185)};
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

export const ChooseGameButton = styled.button`
  ${({ theme, color }) => css`
    cursor: pointer;
    background-color: transparent;
    border: ${rem(2)} solid ${color};
    width: ${rem(113)};
    height: ${rem(34)};
    border-radius: ${rem(100)};
    font-size: ${rem(14)};
    font-weight: bold;
    color: ${color};
    transition: 0.3s;

    :hover {
      background-color: ${color};
      color: ${theme.colors.background};
    }
  `}
`;
