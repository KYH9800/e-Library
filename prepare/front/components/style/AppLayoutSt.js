import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
html, body {
  /* background-color: gray; */
  font-family: '고딕';
  line-height: 1.5;
  margin: 0;
  padding: 0;
  min-height: 80%;
  position: relative; 
  nav {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
  }
}
`;

export const Main = styled.main`
  position: inherit;
  margin: auto;
  height: 100%;
  margin-top: 10%;
  padding-bottom: 19%;
`;
