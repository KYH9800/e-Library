import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
body {
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  header {
    height: 350px;
    background-image: linear-gradient(134deg,rgb(255 255 255) -5%,rgb(221 217 217) 56%,rgb(223 216 216) 56%);
  }
  footer {
    height: 266px;
    background-color: #c1bebe;
    top: 0;
    left: 0;
    right: 0;
  }
}
`;
/* 각 페이지 공통 */
export const Emptyplace = styled.div`
  height: 127px;
`;
