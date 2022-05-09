import styled, { css } from "styled-components";
import { rem } from "polished";

export const Container = styled.section`
  ${({ theme }) => css`
    h1 {
      color: ${theme.colors.logo.primary};
      font-size: ${rem(65)};
      font-weight: bold;
      text-align: center;

      max-width: ${rem(370)};

      display: flex;
      align-items: center;
      flex-direction: column;
    }

    @media (max-width: ${rem(768)}) {
      h1 {
        margin: ${rem(30)} 0;
        font-size: ${rem(55)};
        width: ${rem(310)};
      }
    }

    @media (max-width: ${rem(425)}) {
      h1 {
        font-size: ${rem(48)};
        width: ${rem(250)};
      }
    }
  `}
`;

export const ForWrapper = styled.div`
  ${({ theme }) => css`
    height: ${rem(39)};
    width: ${rem(144)};

    background-color: ${theme.colors.primary};
    margin: ${rem(30)} 0 ${rem(20)} 0;
    border-radius: ${rem(100)};

    color: ${theme.colors.logo.secondary};
    font-size: ${rem(22)};

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${rem(425)}) {
      font-size: ${rem(20)};
    }
  `}
`;

export const LotteryWrapper = styled.span`
  font-size: ${rem(83)};

  @media (max-width: ${rem(768)}) {
    font-size: ${rem(68)};
  }

  @media (max-width: ${rem(425)}) {
    font-size: ${rem(57)};
  }
`;
