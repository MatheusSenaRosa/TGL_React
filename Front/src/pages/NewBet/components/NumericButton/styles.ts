import { zoomIn, zoomOut } from "@animations/index";
import styled from "styled-components";

export const Container = styled.li<{ active: boolean; color: string }>`
  button {
    background-color: ${({ active, color }) => (active ? color : "#adc0c4")};
    transition-duration: 0.2s;

    color: white;
    font-size: 20px;
    font-weight: bold;

    border: 0;
    border-radius: 50%;

    height: 65px;
    width: 65px;

    cursor: pointer;

    &:hover {
      animation: ${zoomIn} 0.3s ease forwards;
    }

    &:not(:hover) {
      animation: ${zoomOut} 0.3s ease forwards;
    }
  }
`;
