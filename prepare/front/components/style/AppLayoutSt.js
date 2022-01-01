import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
body {
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
}
`;
