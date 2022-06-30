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

    @media (max-width: ${rem(1440)}) {
      padding: 0 ${rem(133)} 0 ${rem(115)};
    }

    @media (max-width: ${rem(1024)}) {
    }
  `}
`;

export const NewBetButton = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
    font-size: ${rem(24)};
    margin-left: auto;
    font-size: ${rem(24)};
    font-weight: bold;
    color: ${theme.colors.primary};

    border: none;
    background-color: transparent;

    display: flex;
    align-items: center;
    gap: ${rem(10)};

    cursor: pointer;

    @media (max-width: ${rem(1024)}) {
      margin: 0;
    }
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
    }

    @media (max-width: ${rem(1024)}) {
      flex-direction: column-reverse;
      justify-content: center;

      section {
        margin-top: ${rem(10)};
        flex-direction: column;
        gap: ${rem(10)};

        p {
          margin: 0;
        }
      }
    }
  `}
`;

export const FiltersWrapper = styled.div`
  display: flex;
  gap: ${rem(25)};
`;

export const MainWrapper = styled.section<{ isEmpty: boolean }>`
  ${({ isEmpty, theme }) => css`
    margin-top: ${rem(35)};

    ${isEmpty &&
    css`
      color: ${theme.colors.error};
      font-size: ${rem(23)};
      font-weight: bold;
    `}

    ul {
      display: flex;
      flex-direction: column;
      gap: ${rem(30)};

      max-height: ${rem(600)};
      overflow-y: auto;
      max-width: ${rem(800)};
    }
  `}
`;

export const ItemList = styled.li<{ color: string }>`
  ${({ theme, color }) => css`
    position: relative;
    padding-left: ${rem(21)};

    display: flex;
    flex-direction: column;
    gap: ${rem(13)};

    p {
      font-size: ${rem(20)};
      font-weight: bold;
      color: ${theme.colors.text.secondary};
    }

    h4 {
      font-size: ${rem(17)};
      font-weight: normal;
      color: ${theme.colors.text.secondary};
    }

    h3 {
      font-size: ${rem(20)};
      font-weight: bold;
      color: ${color};
    }

    ::before {
      content: "";
      background-color: ${color};
      min-height: 100%;
      left: 0;
      width: ${rem(6)};
      border-radius: ${rem(100)};
      position: absolute;
    }
  `}
`;
