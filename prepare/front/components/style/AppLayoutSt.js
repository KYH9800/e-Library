import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
body {
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  background-color: #ddd3cdb8;
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
    background-image: linear-gradient(134deg,rgb(237 233 230) -5%,rgb(183 170 161) 56%,rgb(181 169 161) 56%);
  }
  footer {
    height: 266px;
    background-color: #c1bebe;
    div {
    padding-top: 118px;
    text-align: center;
  }
  div a {
    font-family: '고딕';
    font-size: 20px;
    color: #edeaf5;
    margin: 10px;
    padding: 60px;
    padding-top: 20px;
    padding-bottom: 20px;
    /* border: solid 1px black; */
    background: #1615152e;
  }
  a:hover {
    background: #1615157d;
  }
    }
}
`;
/* 각 페이지 공통 */
export const Emptyplace = styled.div`
  height: 127px;
`;
