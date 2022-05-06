import { addedElement, removeCart } from "@animations/index";
import { IoTrashOutline } from "react-icons/io5";
import styled, { css } from "styled-components";

export const Item = styled.li<{ isRemoving: boolean }>`
  ${({ color, isRemoving }) => css`
    position: relative;

    display: flex;
    align-items: center;
    width: 354px;

    min-height: 80px;

    animation: ${isRemoving ? removeCart : addedElement} 0.3s forwards;

    > div:last-child {
      margin-right: 16px;
      margin-left: 24px;
      flex: 1;

      p {
        font-size: 17px;
        font-weight: bold;
        font-style: italic;
        color: #868686;
      }

      h5 {
        margin-top: 6px;
        font-size: 17px;
        font-weight: bold;
        font-style: italic;
        color: ${color};

        span {
          font-weight: normal;
          font-style: normal;
          color: #868686;
          margin-left: 10px;
        }
      }
    }
  `}
`;

export const TrashIcon = styled(IoTrashOutline)`
  color: #888888;
  margin-left: 13px;

  transition-duration: 0.3s;
  cursor: pointer;

  &&:hover {
    color: rgba(255, 0, 0, 0.8);
  }
`;

export const ColoredDivisor = styled.span<{ color: string }>`
  position: absolute;

  width: 4px;
  height: 100%;

  left: 50px;
  background-color: ${({ color }) => color};
  border-radius: 100px 0px 0px 100px;
`;
