import styled, { css } from "styled-components";
import { rem } from "polished";

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    height: ${rem(89)};
    margin-top: auto;
    border-top: ${rem(2)} solid ${theme.colors.footer.border};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: ${rem(15)};
    color: ${theme.colors.text.primary};
  `}
`;
