import { rem } from "polished";
import styled, { css } from "styled-components";

export const Screen = styled.main`
  ${({ theme }) => css`
    height: 100vh;
    background-color: ${theme.colors.background};
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    height: ${rem(75)};
    padding: 0 ${rem(200)};
    border-bottom: ${rem(2)} solid ${theme.colors.footer.border};

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;
  `}
`;

export const MiniLogo = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.logo.primary};
    font-size: ${rem(44)};
    font-weight: bold;

    span {
      position: absolute;
      bottom: ${rem(-3.5)};
      border-radius: ${rem(6)};
      left: ${rem(185)};
      width: ${rem(107)};
      height: ${rem(7)};
      background-color: ${theme.colors.primary};
    }
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
  `}
`;
