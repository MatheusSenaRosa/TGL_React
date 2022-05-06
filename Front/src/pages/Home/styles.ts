import { Link } from "react-router-dom";
import { fadeIn } from "@animations/fade";
import styled from "styled-components";

export const Header = styled.header`
  height: 75.5px;
  border-bottom: 2px solid #ebebeb;
  padding: 0 200px 0 130px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavigationMenu = styled.nav`
  ul {
    display: flex;
    gap: 57px;

    a,
    span {
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
  padding: 70px 195px 0 130px;
  display: flex;
  animation: ${fadeIn} 0.6s;
`;

export const FiltersContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ChooseFilter = styled.div`
  display: flex;
  align-items: center;

  h3 {
    color: #707070;
    font-size: 24px;
    font-style: italic;
    font-weight: bold;
  }

  h5 {
    color: #868686;
    font-size: 17px;
    font-style: italic;
    font-weight: normal;
    margin-left: 45px;
  }

  div {
    margin-left: 15px;

    display: flex;
    gap: 25px;
  }
`;

export const ArrowIcon = styled.span`
  display: flex;
  align-items: center;

  font-size: 23px;
`;

export const RecentGamesList = styled.ul`
  max-height: 620px;
  width: 900px;
  padding-right: 15px;
  margin-top: 38px;

  display: flex;
  flex-direction: column;
  gap: 30px;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
    height: 10px;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background: white;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #868686;
    border-radius: 5px;
  }
`;

export const NewBet = styled(Link)`
  margin-left: auto;
  height: min-content;

  display: flex;
  align-items: center;

  color: #b5c401;
  font-size: 24px;
  font-style: italic;
  font-weight: bold;

  span {
    margin-left: 11px;
  }
`;

export const LoaderContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoBetsMessage = styled.h4`
  color: rgba(235, 0, 0);
`;
