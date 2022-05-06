import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
  width: 352px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 35px;
  font-style: italic;
  text-align: center;

  color: #707070;

  cursor: default;
`;

export const FormElement = styled.form`
  width: 100%;
  margin: 26px 0 0 0;

  background-color: #ffffff;
  box-shadow: 0px 3px 25px #00000014;

  border: 1px solid #dddddd;
  border-radius: 14px;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  a {
    align-self: flex-end;
    color: #c1c1c1;
    font-size: 17px;
    font-style: italic;
    margin: 20px 25px 20px 0;
    transition-duration: 0.3s;

    &:hover {
      text-decoration: underline;
      color: gray;
    }
  }
`;

export const OutsideButton = styled(Link)`
  margin-top: 30px;
  align-self: center;

  cursor: pointer;

  color: #707070;
  font-size: 35px;
  font-style: italic;
  font-weight: bold;

  display: flex;
`;

export const ArrowRightIcon = styled(HiArrowRight)`
  margin-left: 10px;
`;

export const ArrowLeftIcon = styled(HiArrowLeft)`
  margin-right: 10px;
`;
