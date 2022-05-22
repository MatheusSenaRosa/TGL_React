import styled, { css } from "styled-components";

import { rem } from "polished";

export const Container = styled.main`
  ${({ theme }) => css`
    display: flex;

    align-items: center;
    justify-content: space-evenly;
    flex: 1;
    background-color: ${theme.colors.background.body};

    @media (max-width: ${rem(768)}) {
      flex-direction: column;
    }
  `}
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

export const PasswordContainer = styled.div`
  position: relative;
  display: flex;
`;

export const EyeButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    background-color: transparent;
    color: ${theme.colors.text.placeholder};
    border: none;
    position: absolute;
    right: 3%;
    align-self: center;

    &:hover {
      color: ${theme.colors.text.primary};
    }
  `}
`;
