import styled from "styled-components";

export const Container = styled.section``;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #707070;
  width: 380px;

  text-align: center;
  font-size: 65px;
  font-style: italic;

  cursor: default;

  span {
    background-color: #b5c401;
    color: #ffffff;
    border-radius: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 144px;
    height: 39px;
    margin: 30px 0 20px 0;

    font-size: 22px;
    font-style: italic;
  }
`;
