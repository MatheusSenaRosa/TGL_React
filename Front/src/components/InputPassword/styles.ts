import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const InputElement = styled.input`
  padding: 0 60px 0 25px;
  height: 80px;
  width: 100%;

  border: 0;
  border-bottom: 2px solid #ebebeb;
  outline: none;

  color: #9d9d9d;

  font-size: 17px;
  font-weight: bold;
  font-style: italic;

  transition-duration: 0.3s;
  caret-color: #9d9d9d;

  &&::placeholder {
    color: #9d9d9d;
    font-size: 17px;
    font-weight: bold;
    font-style: italic;
  }
`;

export const OpenEyeIcon = styled(AiOutlineEye)`
  position: absolute;

  right: 20px;
  top: 24px;

  color: #9d9d9d;

  cursor: pointer;

  transition: all 0.3s;

  &&:hover {
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const CloseEyeIcon = styled(AiOutlineEyeInvisible)`
  position: absolute;

  right: 20px;
  top: 24px;

  color: #9d9d9d;

  cursor: pointer;

  transition: all 0.3s;

  &&:hover {
    color: rgba(0, 0, 0, 0.6);
  }
`;
