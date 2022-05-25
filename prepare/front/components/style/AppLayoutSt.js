import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
body {
  position: relative;
  font-family: '고딕';
  margin: 0;
  padding: 0;
  width: 100%;
}
`;

export const Wrapper = styled.div`
  position: relative;
  main {
    position: relative;
    left: 10px;
    right: 0;
    margin-top: 110px;
    margin-bottom: 80px;
    height: auto;
  }

  footer {
    position: fixed;
    bottom: 0;
    border-right: 1px solid #d1d1d1;
    background-color: rgb(246 246 246);
    width: 210px;
    height: 100%;
  }

  @media (max-width: 1300px) {
    main {
      position: relative;
      left: 0;
      right: 0;
    }
    footer {
      display: none;
    }
  }
`;
