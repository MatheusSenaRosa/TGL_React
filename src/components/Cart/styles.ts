import { rem } from "polished";
import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    margin-top: ${rem(41)};
    overflow: hidden;

    display: flex;
    flex-direction: column;

    width: ${rem(400)};
    height: ${rem(574)};

    background-color: ${theme.colors.background.form};
    border: ${rem(1.5)} solid ${theme.colors.border.primary};
    border-radius: ${rem(10)};

    margin-right: ${rem(15)};

    @media (max-width: ${rem(1200)}) {
      width: ${rem(350)};
    }

    @media (max-width: ${rem(1024)}) {
      display: none;
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    padding: ${rem(35)} 0;
    padding-left: ${rem(19)};

    font-size: ${rem(27)};
    font-weight: bold;
    color: ${theme.colors.text.primary};
  `}
`;

export const SubmitButton = styled.button`
  ${({ theme, color }) => css`
    margin-top: auto;
    height: ${rem(96)};

    color: ${color};
    font-size: ${rem(35)};
    font-weight: bold;

    background-color: ${theme.colors.background.body};
    border: none;
    cursor: pointer;
    border-top: ${rem(1)} solid ${theme.colors.border.primary};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${rem(9)};
    transition: all 0.3s;

    :disabled {
      cursor: not-allowed;
    }

    :not(:disabled):hover {
      background-color: ${color};
      color: ${theme.colors.background.body};
    }
  `}
`;

export const TotalWrapper = styled.div`
  ${({ theme }) => css`
    margin: ${rem(30)} 0 ${rem(35)} 0;
    padding-left: ${rem(19)};

    font-size: ${rem(27)};
    font-weight: bold;
    color: ${theme.colors.text.primary};

    span {
      font-weight: normal;
    }
  `}
`;
