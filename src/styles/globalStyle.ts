import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html, body, #root  {
  scroll-behavior: smooth!important;
  height: 100vh;
}

#root{
  overflow-y: scroll;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: #620000;
  min-height: 100%;
}`;

export default GlobalStyle;
