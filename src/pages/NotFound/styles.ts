import styled, { css } from "styled-components";
import { rem, rgba } from "polished";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
`;

export const NotFoundTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${rem(35)};
    color: ${theme.colors.error};
  `}
`;
