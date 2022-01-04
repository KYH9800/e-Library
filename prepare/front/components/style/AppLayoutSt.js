import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
body {
  color: white;
  font-family: '고딕';
  line-height: 1.5;
  background-color: rgb(24 26 27);
  h1{
    color: white;
  }
  h2 {
    color: white;
  }
  p{
    color: white;
  }
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
}
`;

export const LayoutHeader = styled.div`
  height: 127px;
  margin: auto;
  width: 1200px;
`;
export const LayoutMain = styled.div`
  margin: auto;
  width: 1200px;
`;
export const LayoutFooter = styled.div`
  background-color: rgb(60, 65, 67);
`;
