import styled from "styled-components";

export const Item = styled.li`
  display: flex;

  div {
    padding-top: 5px;

    margin-left: 15px;
    color: #868686;
  }
`;

export const ColoredBorder = styled.span<{ color: string }>`
  display: block;

  background-color: ${({ color }) => color};
  border-radius: 100px;
  width: 6px;
`;

export const Numbers = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 15px;
`;

export const DateAndPrice = styled.p`
  font-size: 17px;
  font-style: italic;
`;

export const GameName = styled.h4<{ color: string }>`
  margin-top: 11px;

  color: ${({ color }) => color};
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
`;
