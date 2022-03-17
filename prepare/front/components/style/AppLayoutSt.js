import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
body {
  font-family: '고딕';
  line-height: 1.5;
  margin: 0;
  padding: 0;
  min-height: 80%;
  position: relative; 
  nav {
    position: fixed;
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
  margin-top: 5%;
  margin-bottom: 15%;
  /* @media (max-width: 1500px) {
    padding-bottom: 55%;
  }
  @media (max-width: 650px) {
    padding-bottom: 65%;
  }
  @media (max-width: 560px) {
    padding-bottom: 85%;
  }
  @media (max-width: 470px) {
    padding-bottom: 105%;
  }
  @media (max-width: 400px) {
    padding-bottom: 125%;
  }
  @media (max-width: 320px) {
    padding-bottom: 135%;
  } */
`;
