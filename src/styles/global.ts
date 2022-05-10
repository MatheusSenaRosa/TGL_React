import { createGlobalStyle, css } from "styled-components";

export const Global = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    font-style: italic;
    transition: background 0.5s, color 0.1s, border-color 0.5s;
  }
  body {
    background-color: ${theme.colors.background};
  }
`}
`;
