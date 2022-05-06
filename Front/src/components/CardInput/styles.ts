import styled from "styled-components";

export const InputElement = styled.input<{ invalid?: boolean }>`
  padding: 0 25px;
  height: 80px;
  width: 100%;

  border: 0;
  border-bottom: 2px solid #ebebeb;
  outline: none;

  color: ${({ invalid }) => (invalid ? "rgba(255,0,0, .8)" : "#9d9d9d")};

  font-size: 17px;
  font-weight: bold;
  font-style: italic;

  transition-duration: 0.3s;
  caret-color: #9d9d9d;

  &::placeholder {
    color: #9d9d9d;
    font-size: 17px;
    font-weight: bold;
    font-style: italic;
  }
`;
