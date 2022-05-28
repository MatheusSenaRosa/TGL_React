import { rem } from "polished";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;

    background-color: ${theme.colors.background.body};

    display: flex;
    position: relative;
    flex-direction: column;
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    height: ${rem(75)};
    padding: 0 ${rem(200)};
    border-bottom: ${rem(2)} solid ${theme.colors.border.primary};
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

    @media (max-width: ${rem(1440)}) {
      padding: 0 ${rem(130)};

      span {
        left: ${rem(115)};
      }
    }

    @media (max-width: ${rem(1024)}) {
      padding: 0 ${rem(100)};

      span {
        left: ${rem(85)};
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
    color: ${theme.colors.text.primary};
    font-size: ${rem(44)};
    font-weight: bold;
  `}
`;

export const NavBar = styled.nav<{ navButtons: number }>`
  ${({ theme, navButtons }) => css`
    ${() =>
      navButtons >= 2 &&
      css`
        flex: 1;
        ul {
          justify-content: flex-end;

          li:first-child {
            margin-right: auto;
            margin-left: ${rem(57)};
          }
        }
      `}

    ul {
      display: flex;
      gap: ${rem(57)};

      li {
        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
          color: ${theme.colors.text.primary};
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

export const MenuButton = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    position: absolute;
    left: ${rem(10)};
    font-size: ${rem(32)};

    @media (min-width: ${rem(769)}) {
      display: none;
    }
  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    height: ${rem(89)};
    margin-top: auto;
    border-top: ${rem(2)} solid ${theme.colors.border.primary};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: ${rem(15)};
    color: ${theme.colors.text.primary};
  `}
`;
