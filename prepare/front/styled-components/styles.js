import styled, { createGlobalStyle } from 'styled-components';

// styled-components
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    background-image: url("");
  }
  // 화면이 700px 이하면 아래의 CSS 적용
  @media (max-width: 700px) {
    html,
    body {
      margin: 0;
      padding: 0;
    }
  }
`;
export const Header = styled.header`
  background-image: url('https://cdn.pixabay.com/photo/2016/01/27/15/25/space-1164579_960_720.png');
  background-size: 1200px;
  height: 400px;
  // 화면이 1400px 이하면 아래의 CSS 적용
  @media (max-width: 1400px) {
    height: 430px;
  }
  // 화면이 600px 이하면 아래의 CSS 적용
  @media (max-width: 700px) {
    height: 300px;
  }
  // 화면이 360px 이하면 아래의 CSS 적용
  @media (max-width: 360px) {
    height: 200px;
  }
`;
export const Nav = styled.nav`
  // 메뉴바 가운데 정렬
  text-align: center;
  nav ul {
    display: inline-block;
  }
  nav li {
    float: left;
  }
  background: rgb(129 129 139 / 22%);
  height: 100px;
  vertical-align: top;
  // 화면이 700px 이하면 아래의 CSS 적용
  @media (max-width: 700px) {
    height: 50px;
    text-align: center;
    nav ul {
      display: inline-block;
    }
    nav li {
      float: left;
    }
  }
  // 화면이 360px 이하면 아래의 CSS 적용
  @media (max-width: 360px) {
    height: 37px;
    text-align: center;
    nav ul {
      display: inline-block;
    }
    nav li {
      float: left;
    }
  }
`;
export const Video = styled.video`
  width: 100%;
`;
export const Htag = styled.h1`
  a {
    font-family: cursive;
    text-decoration-line: none;
    color: white;
  }
  font-size: 35px;
  margin: 20px;
  margin-left: 35px;
  position: fixed;
  // 1400px
  @media (max-width: 1400px) {
    font-size: 30px;
    margin: 25px;
    margin-left: 35px;
    position: fixed;
  }
  // 700
  @media (max-width: 700px) {
    font-size: 20px;
    margin: 10px;
    margin-left: 25px;
    position: fixed;
  }
  // 450
  @media (max-width: 450px) {
    font-size: 15px;
    margin: 12px;
    margin-left: 25px;
    position: fixed;
  }
  // 430
  @media (max-width: 430px) {
    font-size: 15px;
    margin: 12px;
    margin-left: 25px;
    position: fixed;
  }
  // 360
  @media (max-width: 360px) {
    font-size: 10px;
    margin: 10px;
    margin-left: 20px;
    position: fixed;
  }
`;
export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const Li = styled.li`
  a {
    font-family: '고딕';
    text-decoration-line: none;
    color: white;
    margin: 50px;
  }
  display: inline-block;
  margin-top: 30px;
  font-size: 30px;
  // 화면이 1400px 이하면 아래의 CSS 적용
  @media (max-width: 1400px) {
    a {
      margin: 35px;
    }
    margin: auto;
    padding: 0;
    margin-top: 35px;
    font-size: 20px;
  }
  // 화면이 600px 이하면 아래의 CSS 적용
  @media (max-width: 700px) {
    a {
      margin: 15px;
    }
    margin: auto;
    padding: 0;
    margin-top: 16px;
    font-size: 13px;
  }
  // 화면이 360px 이하면 아래의 CSS 적용
  @media (max-width: 360px) {
    a {
      margin: 9px;
    }
    margin: auto;
    padding: 0;
    margin-top: 13px;
    font-size: 8px;
  }
`;
export const H2 = styled.h2`
  a {
    font-family: '고딕';
    text-decoration-line: none;
    color: white;
  }
  font-size: 15px;
  margin: 35px;
  margin-top: -45px;
  float: right;
  // 1400px
  @media (max-width: 1400px) {
    font-size: 12px;
    margin: 22px;
    margin-top: -31px;
    float: right;
  }
  // 965
  @media (max-width: 960px) {
    font-size: 8px;
    margin: 20px;
    margin-top: -29px;
    float: right;
  }
  // 700
  @media (max-width: 700px) {
    font-size: 3px;
    margin: 10px;
    margin-top: -22px;
    float: right;
  }
  // 450
  @media (max-width: 450px) {
    font-size: 15px;
    margin: 12px;
    margin-left: 25px;
    position: fixed;
  }
  // 430
  @media (max-width: 430px) {
    font-size: 15px;
    margin: 12px;
    margin-left: 25px;
    position: fixed;
  }
  // 360
  @media (max-width: 360px) {
    font-size: 10px;
    margin: 10px;
    margin-left: 20px;
    position: fixed;
  }
`;
