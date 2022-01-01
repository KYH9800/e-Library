import styled from 'styled-components';

export const SubHeader = styled.header`
  height: 133px;
  @media (max-width: 1400px) {
    height: 430px;
  }
  @media (max-width: 700px) {
    height: 300px;
  }
  @media (max-width: 360px) {
    height: 200px;
  }
  /* 로그인 창 */
  div {
    background: rgb(28, 31, 32);
    height: 35px;
    width: auto;
  }
  /* 네비게이션 바 전체 */
  nav {
    margin-top: -10px;
    /* 메뉴바 가운데 정렬 */
    text-align: center;
    nav ul {
      display: inline-block;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    nav li {
      float: left;
    }
    background: rgba(0, 0, 0, 0.6);
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
  }
  /* 로고 */
  h1 {
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
  }
  /* li */
  li {
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
  }
  /* 로그인 회원가입 버튼 */
  h2 {
    a {
      font-family: '고딕';
      text-decoration-line: none;
      color: white;
    }
    font-size: 15px;
    margin: 37px;
    margin-top: -50px;
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
  }

  h3 {
    font-size: 35px;
    font-family: '고딕';
    text-align: center;
    color: white;
    width: 62%;
    margin: auto;
    margin-top: 87px;
    background: #000000c7;
    @media (max-width: 1400px) {
      margin-top: 90px;
      font-size: 25px;
      width: 82%;
    }
    @media (max-width: 1076px) {
      margin-top: 100px;
      font-size: 20px;
      width: 82%;
    }
    @media (max-width: 1030px) {
      margin-top: 120px;
      font-size: 17px;
      width: 82%;
    }
    @media (max-width: 826px) {
      margin-top: 110px;
      font-size: 15px;
      width: 82%;
    }
    @media (max-width: 690px) {
      margin-top: 110px;
      font-size: 12px;
      width: 82%;
    }
    @media (max-width: 588px) {
      margin-top: 95px;
      font-size: 9px;
      width: 82%;
    }
  }
`;
