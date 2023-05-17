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
    height: 100vh;
    max-width: 100vw;
    background: linear-gradient(rgba(254, 254, 240, 0.9),  rgba(221, 247, 249, 0.9), );

  }

  /* linear-gradient(rgba(254, 254, 240, 0.9), rgba(221, 247, 249, 0.9)) */

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`
