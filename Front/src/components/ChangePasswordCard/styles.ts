import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #e2e2e2;
  box-shadow: 0px 3px 25px #00000014;
  border-radius: 14px;
  width: 400px;

  background-color: white;

  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Head = styled.div`
  border-bottom: 2px solid #ebebeb;
  padding: 20px 0;

  display: flex;
  justify-content: center;

  h2 {
    color: #868686;
    font-size: 20px;
    font-weight: bold;
    font-style: italic;

    position: relative;

    span {
      position: absolute;
      left: -25px;
      top: -1px;
    }
  }
`;
