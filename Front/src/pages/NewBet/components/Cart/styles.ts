import { HiArrowRight } from "react-icons/hi";
import { notRemovedElement, addCart } from "@animations/index";
import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 367px;
  height: 594px;

  border: 1px solid #e2e2e2;
  background-color: white;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  h3 {
    margin-top: 32px;
    margin-left: 19px;

    color: #707070;
    font-size: 26px;
    font-weight: bold;
    font-style: italic;
  }
`;

export const List = styled.ul<{ isRemoving: boolean; isAdding: boolean }>`
  ${({ isRemoving, isAdding }) => css`
    margin-top: 35px;
    height: 300px;

    display: flex;
    flex-direction: column;

    gap: 30px;
    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 8px;
      height: 10px;
      border-radius: 5px;
    }

    ::-webkit-scrollbar-track {
      background: white;
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background: #868686;
      border-radius: 5px;
    }

    .cartItem:not(:first-child) {
      ${() => {
        if (isRemoving) {
          return css`
            animation: ${notRemovedElement} 0.3s forwards;
          `;
        }
        if (isAdding) {
          return css`
            animation: ${addCart} 0.3s forwards;
          `;
        }
      }}
    }
  `}
`;

export const EmptyText = styled.div`
  margin-top: 35px;
  height: 300px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: rgba(255, 0, 0, 0.8);
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
`;

export const TotalText = styled.h4`
  margin-top: 30px;
  margin-left: 19px;

  color: #707070;
  font-size: 26px;
  font-weight: bold;
  font-style: italic;

  span {
    font-weight: 300;
  }
`;

export const SaveButton = styled.button`
  margin-top: auto;
  border: 0;

  border-top: 1px solid #e2e2e2;
  height: 96px;
  background-color: #f4f4f4;

  color: #27c383;
  font-size: 35px;
  font-weight: bold;
  font-style: italic;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  cursor: pointer;
  transition-duration: 0.3s;

  &&:hover {
    background-color: #27c383;
    color: #f4f4f4;
  }
`;

export const ArrowIcon = styled(HiArrowRight)``;
