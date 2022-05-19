import styled, { css } from "styled-components";
import { rem } from "polished";
import { Link } from "react-router-dom";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;

  @media (max-width: ${rem(768)}) {
    flex-direction: column;
  }
`;

export const NotFoundTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${rem(35)};
    color: ${theme.colors.error};

    @media (max-width: ${rem(768)}) {
      font-size: ${rem(25)};
    }
  `}
`;

export const HomeLink = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${rem(15)};

    color: ${theme.colors.text.primary};
    font-size: ${rem(35)};
    font-weight: bold;

    margin-top: ${rem(30)};
  `}

  @media (max-width: ${rem(768)}) {
    font-size: ${rem(30)};
  }

  @media (max-width: ${rem(425)}) {
    font-size: ${rem(25)};
  }
`;
