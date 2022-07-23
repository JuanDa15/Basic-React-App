import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${(p) => p.theme.bg}
  }
`;
