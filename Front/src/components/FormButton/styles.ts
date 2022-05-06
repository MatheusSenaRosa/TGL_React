import { HiArrowRight } from "react-icons/hi";
import styled from "styled-components";

export const ButtonElement = styled.button<{ isLoading: boolean }>`
  height: 100px;
  cursor: pointer;

  border-radius: 0 0 14px 14px;
  border: 0;

  color: #b5c401;
  background-color: #ffffff;

  transition-duration: 0.5s;

  font-size: 35px;
  font-weight: bold;
  font-style: italic;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isLoading }) =>
    !isLoading &&
    `
      &:hover {
    color: #ffffff;
    background-color: #b5c401;
  }
      `}

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }
`;

export const ArrowRightIcon = styled(HiArrowRight)`
  margin-left: 10px;
`;
