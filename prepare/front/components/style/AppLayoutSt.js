import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
body {
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  /* all header */
  nav {
    position: fixed;
    top: 0;
    /* width: 100% */
    left: 0;
    right: 0;
  }
  header {
    height: 350px;
    background-color: gray;
  }
  footer {
    height: 400px;
    background-color: #e3e3e3;;
    p {
      
    }
  }
}
`;
