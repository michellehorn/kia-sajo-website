import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html, body, #root  {
  scroll-behavior: smooth!important;
}

#root{
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}

body {
  margin: 0;
  padding: 0;
  background-color: #620000;
  min-height: 100%;
  width: 100%;
}`;

export default GlobalStyle;
