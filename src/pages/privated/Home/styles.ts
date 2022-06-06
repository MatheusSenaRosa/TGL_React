import { rem } from "polished";
import styled, { css } from "styled-components";

export const Container = styled.main<{ isLoading?: boolean }>`
  ${({ isLoading }) => css`
    flex: 1;

    margin-top: ${rem(74)};
    padding: 0 ${rem(200)} 0 ${rem(185)};

    ${isLoading &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  `}
`;

export const HeaderWrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    section {
      display: flex;
      align-items: center;
      h2 {
        color: ${theme.colors.text.primary};
        font-size: ${rem(24)};
      }

      p {
        margin-left: ${rem(45)};
        margin-right: ${rem(15)};
        color: ${theme.colors.text.secondary};
        font-size: ${rem(17)};
      }

      div {
        display: flex;
        gap: ${rem(25)};
      }
    }

    div {
      margin-left: auto;
      font-size: ${rem(24)};
      font-weight: bold;
      color: ${theme.colors.primary};
    }
  `}
`;
