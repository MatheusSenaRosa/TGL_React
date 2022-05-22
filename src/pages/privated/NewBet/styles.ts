import styled, { css } from "styled-components";
import { rem, shade } from "polished";

export const Container = styled.main<{ isLoading?: boolean }>`
  ${({ isLoading }) =>
    css`
      flex: 1;
      padding: 0 ${rem(185)};
      display: flex;
      justify-content: space-between;

      gap: ${rem(20)};

      ${isLoading &&
      css`
        align-items: center;
        justify-content: center;
      `}

      @media(max-width: ${rem(1440)}) {
        padding: 0 ${rem(115)};
      }

      @media (max-width: ${rem(1024)}) {
        padding: 0 ${rem(85)};
      }

      @media (max-width: ${rem(425)}) {
        padding: 0 ${rem(20)};
      }
    `}
`;

export const Content = styled.div`
  max-width: ${rem(760)};
  margin-top: ${rem(74)};

  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: ${rem(1024)}) {
    width: 100%;
    max-width: none;
  }

  @media (max-width: ${rem(425)}) {
    margin-top: ${rem(50)};
  }
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${rem(27)};
    font-weight: bold;
    color: ${theme.colors.text.primary};

    span {
      font-weight: 300;
      text-transform: uppercase;
    }
    @media (max-width: ${rem(320)}) {
      font-size: ${rem(23)};
    }
  `}
`;

export const ChooseGameWrapper = styled.section`
  ${({ theme }) => css`
    margin-top: ${rem(33)};

    h3,
    p {
      font-size: ${rem(17)};
      font-weight: bold;
      color: ${theme.colors.text.secondary};
    }

    div {
      margin-top: ${rem(20)};
      display: flex;
      gap: ${rem(25)};
      overflow-x: auto;
      height: ${rem(50)};
    }
  `}
`;

export const ChooseGameButton = styled.button<{ isActive: boolean }>`
  ${({ theme, color, isActive }) => css`
    cursor: pointer;
    border: ${rem(2)} solid ${color};
    min-width: ${rem(113)};
    height: ${rem(34)};
    border-radius: ${rem(100)};
    font-size: ${rem(14)};
    font-weight: bold;
    color: ${color};
    transition: 0.3s;

    ${!isActive &&
    css`
      background-color: transparent;

      :hover {
        background-color: ${color};
        color: ${theme.colors.background.body};
      }
    `}

    ${isActive &&
    css`
      background-color: ${color};
      color: ${theme.colors.background.highlight};
    `}
  `}
`;

export const DescriptionWrapper = styled.section`
  margin-top: ${rem(20)};

  h3 {
    margin-bottom: ${rem(3)};
  }

  p {
    padding-right: ${rem(20)};
    line-height: ${rem(22)};
    width: 100%;
    font-weight: normal;
  }
`;

export const NumbersWrapper = styled.section`
  ${({ color }) => css`
    margin-top: ${rem(27)};

    height: ${rem(390)};
    overflow-y: auto;

    /* width */
    ::-webkit-scrollbar {
      width: ${rem(7)};
      height: 1 ${rem(0)};
      border-radius: ${rem(5)};
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${color};
      border-radius: ${rem(5)};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${shade(0.3, color!)};
    }
  `}
`;

export const ContainerNumbers = styled.div`
  display: flex;
  column-gap: ${rem(12)};
  row-gap: ${rem(20)};
  flex-wrap: wrap;

  @media (max-width: ${rem(425)}) {
    justify-content: center;
  }
`;

export const NumericButton = styled.button`
  ${({ theme, color }) => css`
    min-width: ${rem(65)};
    height: ${rem(65)};
    cursor: pointer;

    border-radius: 50%;
    background-color: ${theme.title === "dark"
      ? shade(0.2, theme.colors.background.numericButton)
      : theme.colors.background.numericButton};
    border: none;

    font-size: ${rem(20)};
    font-weight: bold;
    font-style: normal;
    color: ${theme.colors.text.highlight};
    transition: 0.3s;

    :hover {
      background-color: ${color};
    }

    @media (max-width: ${rem(320)}) {
      height: ${rem(55)};
      min-width: ${rem(55)};
      font-size: ${rem(18)};
    }
  `}
`;

export const ActionWrapper = styled.section`
  ${({ color, theme }) => css`
    flex: 1;
    padding-right: ${rem(20)};
    margin: ${rem(20)} 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      padding: ${rem(10)} ${rem(43)} ${rem(13)} ${rem(25)};
      cursor: pointer;
      display: flex;
      color: ${theme.colors.background.body};
      align-items: center;
      border-radius: ${rem(10)};
      background-color: ${color};
      font-size: ${rem(16)};
      font-weight: 500;
      font-style: normal;
      gap: ${rem(28)};
      border: ${rem(1)} solid ${color};
      :hover {
        background-color: ${shade(0.3, color!)};
        border-color: ${shade(0.3, color!)};
      }
    }

    span {
      display: flex;
      gap: ${rem(25)};

      button {
        padding: ${rem(16)} ${rem(25)};
        cursor: pointer;
        border-radius: ${rem(10)};

        border: ${rem(1)} solid ${color};
        color: ${color};
        font-size: ${rem(16)};
        font-weight: 500;
        font-style: normal;
        background-color: transparent;

        transition: 0.3s;

        :hover {
          background-color: ${color};
          color: ${theme.colors.background.body};
        }
      }
    }

    @media (max-width: ${rem(425)}) {
      flex-direction: column;
      padding: 0;
      gap: ${rem(10)};
      span {
        justify-content: space-evenly;

        button {
          width: auto;
        }
      }

      button {
        width: ${rem(325)};
        justify-content: center;
      }
    }

    @media (max-width: ${rem(320)}) {
      span {
        button {
          width: 45%;
          height: ${rem(55)};
        }
      }

      > button {
        width: 100%;
      }
    }
  `}
`;
