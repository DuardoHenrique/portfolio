import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    min-height: 100vh;
    max-width: 100vw;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }
`
