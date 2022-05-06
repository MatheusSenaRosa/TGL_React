import { fadeIn, oldGame, newGame } from "@animations/index";
import styled, { css } from "styled-components";

export const Header = styled.header`
  height: 75.5px;
  border-bottom: 2px solid #ebebeb;
  padding: 0 200px 0 130px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    a {
      margin-left: 74px;
      color: #707070;
      font-size: 20px;
      font-weight: bold;
      font-style: italic;
      cursor: pointer;
    }
  }
`;

export const NavigationMenu = styled.nav`
  ul {
    display: flex;
    gap: 57px;

    a,
    span {
      color: #707070;
      font-size: 20px;
      font-weight: bold;
      font-style: italic;

      display: flex;
      align-items: center;

      cursor: pointer;
    }
  }
`;

export const Content = styled.main`
  flex: 1;
  display: flex;

  justify-content: space-between;

  animation: ${fadeIn} 0.6s;

  padding-left: 130px;
  padding-right: 199px;
  padding-top: 74px;
`;

export const BetSection = styled.section<{ isChangingGame: boolean }>`
  ${({ isChangingGame }) => css`
    width: 715px;

    h2 {
      text-transform: uppercase;
      font-size: 24px;
      font-style: italic;
      font-weight: bold;
      color: #707070;
      display: flex;

      span {
        margin-left: 8px;
        font-weight: 300;
        display: flex;

        p {
          margin-left: 8px;
          ${!isChangingGame &&
          css`
            animation: ${oldGame} 0.1s forwards;
          `}
          ${isChangingGame &&
          css`
            animation: ${newGame} 0.1s forwards;
          `}
        }
      }
    }
  `}
`;

export const ChooseGame = styled.div`
  margin-top: 33px;

  h4 {
    color: #868686;
    font-size: 17px;
    font-style: italic;
    font-weight: bold;
  }

  div {
    margin-top: 20px;
    margin-bottom: 28px;
    display: flex;
    gap: 25px;
  }
`;

export const LoaderContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.p`
  width: 681px;
  color: #868686;
  font-size: 17px;
  font-style: italic;
  margin-top: 5px;
`;

export const NumbersSection = styled.section<{ color: string }>`
  margin-top: 17px;
  padding: 10px 0;

  height: 320px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
    height: 10px;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #adc0c4;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ color }) => color};
    border-radius: 5px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 12px;
    row-gap: 20px;
  }
`;

export const ActionButtonsSection = styled.section`
  display: flex;
  justify-content: space-between;

  width: 680px;
  margin-top: 44px;

  div {
    display: flex;
    gap: 25px;

    button {
      height: 52px;
      border-radius: 10px;
      border: 1px solid #27c383;
      background-color: white;

      cursor: pointer;
      transition-duration: 0.4s;

      font-size: 16px;
      font-weight: bold;
      color: #27c383;

      &:hover {
        background-color: #27c383;
        color: white;
      }
    }

    .completeGame {
      width: 164px;
    }

    .clearGame {
      width: 135px;
    }
  }
`;

export const AddCartButton = styled.button`
  width: 209px;
  height: 52px;
  padding: 0 43px 0 25px;

  border-radius: 10px;
  border: 1px solid #27c383;
  background-color: #27c383;

  color: white;
  font-size: 17px;
  font-weight: bold;

  transition-duration: 0.4s;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &&:hover {
    border-color: #209263;
    background-color: #209263;
  }
`;
