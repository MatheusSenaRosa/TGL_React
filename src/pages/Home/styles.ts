import styled, { css } from "styled-components";
import { rem } from "polished";

export const Screen = styled.main`
  ${({ theme }) => css`
    height: 100vh;
    background-color: ${theme.colors.background};

    display: flex;
    flex-direction: column;
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    height: ${rem(75)};
    padding: 0 ${rem(200)};
    border-bottom: ${rem(2)} solid ${theme.colors.footer.border};
    max-width: 100%;
    min-width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;

    span {
      position: absolute;
      bottom: ${rem(-3.5)};
      border-radius: ${rem(6)};
      left: ${rem(185)};
      width: ${rem(107)};
      height: ${rem(7)};
      background-color: ${theme.colors.primary};
    }

    @media (max-width: ${rem(1024)}) {
      padding: 0 ${rem(130)};

      span {
        left: ${rem(115)};
      }
    }

    @media (max-width: ${rem(768)}) {
      flex-direction: column;
      justify-content: center;
      padding: 0;

      span {
        left: auto;
        align-self: center;
      }
    }
  `}
`;

export const MiniLogo = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.logo.primary};
    font-size: ${rem(44)};
    font-weight: bold;
  `}
`;

export const NavBar = styled.nav`
  ${({ theme }) => css`
    ul {
      display: flex;
      gap: ${rem(57)};

      li {
        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
          color: ${theme.colors.logo.primary};
          font-size: ${rem(20)};
          font-weight: bold;

          display: flex;
          align-items: center;

          gap: ${rem(10)};
        }
      }
    }

    @media (max-width: ${rem(768)}) {
      display: none;
    }
  `}
`;

export const Container = styled.main`
  flex: 1;
`;

export const MenuButton = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.logo.primary};
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    position: absolute;
    left: ${rem(10)};
    font-size: ${rem(32)};

    outline-color: ${theme.colors.primary};

    @media (min-width: ${rem(769)}) {
      display: none;
    }
  `}
`;
