import styled from "styled-components";

export const Title = styled.h1`
  font-size: 44px;
  color: #707070;
  font-weight: bold;
  font-style: italic;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 10px;

  cursor: default;

  span {
    background-color: #b5c401;
    width: 107px;
    height: 7px;
    border-radius: 6px;

    position: absolute;
    top: 54px;
  }
`;
