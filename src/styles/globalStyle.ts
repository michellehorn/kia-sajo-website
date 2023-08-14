import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
#root{
  height: 100vh;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: #002240;
  min-height: 100%;
  width: 100%;
}`;

export default GlobalStyle;
