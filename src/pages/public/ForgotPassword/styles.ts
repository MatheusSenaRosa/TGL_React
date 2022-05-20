import styled, { css } from "styled-components";
import { rem } from "polished";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;

  @media (max-width: ${rem(768)}) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  ${({ theme }) => css`
    height: ${rem(80)};
    width: 100%;
    padding-left: ${rem(30)};
    background-color: transparent;

    border: none;
    border-bottom: ${rem(2)} solid ${theme.colors.border.primary};

    color: ${theme.colors.text.placeholder};
    font-size: ${rem(17)};
    font-weight: bold;

    &&::placeholder {
      color: ${theme.colors.text.placeholder};
      font-size: ${rem(17)};
      font-weight: bold;
    }
  `}
`;
