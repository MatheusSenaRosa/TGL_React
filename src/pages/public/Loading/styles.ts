import styled, { css } from "styled-components";

export const Container = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background-color: ${theme.colors.background.body};
  `}
`;
