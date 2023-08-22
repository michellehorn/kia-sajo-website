import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html, body, #root  {
  scroll-behavior: smooth!important;
  height: 100vh;
}

#root{
  overflow-y: scroll;
  overflow-x: hidden;
}

body {
  margin: 0;
  padding: 0;
  background-color: #620000;
  min-height: 100%;
}`;

export default GlobalStyle;
