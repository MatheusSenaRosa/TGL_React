import { fadeIn } from "@animations/fade";
import styled from "styled-components";

export const Header = styled.header`
  height: 75.5px;
  border-bottom: 2px solid #ebebeb;
  padding: 0 200px 0 130px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    a {
      margin-left: 74px;
      color: #707070;
      font-size: 20px;
      font-weight: bold;
      font-style: italic;
      cursor: pointer;
    }
  }
`;

export const NavigationMenu = styled.nav`
  ul {
    li span {
      color: #707070;
      font-size: 20px;
      font-weight: bold;
      font-style: italic;

      display: flex;
      align-items: center;

      cursor: pointer;
    }
  }
`;

export const Content = styled.main`
  flex: 1;
  padding: 70px 199px 0 130px;
  display: flex;
  flex-direction: column;

  animation: ${fadeIn} 0.6s;

  h1 {
    font-size: 24px;
    font-style: italic;
    font-weight: bold;
    text-transform: uppercase;
    color: #707070;
  }
`;

export const Container = styled.div`
  display: flex;
  margin-top: 38px;
  justify-content: space-between;
`;

export const LoaderContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
