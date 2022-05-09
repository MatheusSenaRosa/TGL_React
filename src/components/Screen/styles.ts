import { rem } from "polished";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    background-color: ${theme.colors.background};

    display: flex;
    flex-direction: column;
    position: relative;
  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    height: ${rem(89)};
    margin-top: auto;
    border-top: ${rem(2)} solid ${theme.colors.footer.border};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: ${rem(15)};
    color: ${theme.colors.text.primary};
  `}
`;

export const SwitchTheme = styled.button`
  ${({ theme }) => css`
    width: ${rem(45)};
    height: ${rem(45)};
    background-color: transparent;
    color: ${theme.colors.negative};
    cursor: pointer;

    border: none;
    border-radius: 50%;

    position: fixed;
    top: ${rem(30)};
    right: ${rem(30)};

    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.3s;

    box-shadow: 0 0 ${rem(8)} ${theme.colors.negative};

    &&:hover {
      background-color: ${theme.colors.negative};
      color: ${theme.colors.background};
    }
  `}
`;
