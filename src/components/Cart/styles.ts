import styled, { css } from "styled-components";
import { rem, shade } from "polished";

export const Container = styled.section`
  ${({ theme }) => css`
    margin-top: ${rem(41)};
    overflow: hidden;

    display: flex;
    flex-direction: column;

    width: ${rem(400)};
    height: ${rem(574)};

    background-color: ${theme.colors.background.form};
    border: ${rem(1.5)} solid ${theme.colors.border.primary};
    border-radius: ${rem(10)};

    margin-right: ${rem(15)};

    @media (max-width: ${rem(1200)}) {
      width: ${rem(350)};
    }

    @media (max-width: ${rem(1024)}) {
      display: none;
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    padding-top: ${rem(32)};
    padding-left: ${rem(19)};

    font-size: ${rem(27)};
    font-weight: bold;
    color: ${theme.colors.text.primary};
  `}
`;

export const List = styled.ul`
  ${({ color }) => css`
    margin-top: ${rem(35)};
    flex: 1;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    gap: ${rem(32)};

    /* width */
    ::-webkit-scrollbar {
      width: ${rem(5)};
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

export const Item = styled.li`
  ${({ theme }) => css`
    min-height: ${rem(80)};
    position: relative;

    display: flex;
    align-items: center;

    button:first-child {
      background-color: transparent;
      cursor: pointer;
      border: none;
      color: ${theme.colors.text.secondary};
      margin: 0 ${rem(10)} 0 ${rem(10)};

      transition-duration: 0ms;

      :hover {
        color: ${theme.colors.error};
      }
    }

    div:last-child {
      margin-left: ${rem(20)};
      margin-right: ${rem(15)};
      padding: ${rem(10)} 0;
      max-width: ${rem(300)};

      p {
        font-size: ${rem(17)};
        font-weight: bold;
        color: ${theme.colors.text.secondary};
      }

      h4 {
        margin-top: ${rem(4)};
        font-size: ${rem(18)};
        font-weight: bold;
        color: purple;

        span {
          color: ${theme.colors.text.secondary};
          font-weight: normal;
        }
      }
    }

    > span {
      position: absolute;
      height: 100%;
      width: ${rem(4)};
      border-radius: ${rem(100)} 0 0 ${rem(100)};
      background-color: purple;
      left: ${rem(52)};
    }
  `}
`;

export const SubmitButton = styled.button`
  ${({ theme, color }) => css`
    margin-top: auto;
    height: ${rem(96)};

    color: ${color};
    font-size: ${rem(35)};
    font-weight: bold;

    background-color: ${theme.colors.background.body};
    border: none;
    cursor: pointer;
    border-top: ${rem(1)} solid ${theme.colors.border.primary};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${rem(9)};
    transition: all 0.3s;

    :hover {
      background-color: ${color};
      color: ${theme.colors.background.body};
    }
  `}
`;

export const TotalWrapper = styled.div`
  ${({ theme }) => css`
    margin: ${rem(30)} 0 ${rem(35)} 0;
    padding-left: ${rem(19)};

    font-size: ${rem(27)};
    font-weight: bold;
    color: ${theme.colors.text.primary};

    span {
      font-weight: normal;
    }
  `}
`;
