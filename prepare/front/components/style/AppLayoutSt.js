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

export const LayoutMain = styled.div`
  margin: auto;
  margin-top: 10%;
  width: 1200px;
`;
/* ckeditor
.ck {
  margin: auto;
  width: 651px;
  height: 150px;
  .ck-toolbar_grouping {
    margin: auto;
    width: 651px;
  }
  p {
      color: black;
  }
  h2 {
      color: black;
  }
  li {
    color: black;
  }
}
*/
