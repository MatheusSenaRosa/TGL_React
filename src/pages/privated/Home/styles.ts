import { rem } from "polished";
import styled, { css } from "styled-components";

export const Container = styled.main`
  flex: 1;

  margin-top: ${rem(74)};
  padding: 0 ${rem(200)} 0 ${rem(185)};
`;

export const HeaderWrapper = styled.header`
  ${({ theme }) => css`
    border: 1px solid red;

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
        color: ${theme.colors.text.secondary};
        font-size: ${rem(17)};
      }
    }

    div {
      border: 1px solid red;
      margin-left: auto;
      font-size: ${rem(24)};
      font-weight: bold;
      color: ${theme.colors.primary};
    }
  `}
`;
