import styled from 'styled-components';
// LoginSignupMenu
export const LoginSignupMenu = styled.div`
  background-color: rgb(28 28 28 / 83%);
  height: 37px;
  margin-top: -8px;
  user-select: none;
  button {
    color: white;
    font-size: 15px;
    padding: 8px 15px 6px 15px;
    border: 1px;
    float: right;
    text-decoration: none;
    background-color: rgb(28 28 28 / 83%);
  }
  button:hover {
    background-color: black;
  }
  span {
    color: white;
    font-size: 15px;
    padding-right: 16px;
    padding-left: 16px;
    padding-top: 8px;
    padding-bottom: 6px;
    float: right;
    text-decoration: none;
  }
  h3 a {
    color: white;
    font-size: 15px;
    padding-right: 16px;
    padding-left: 16px;
    padding-top: 8px;
    padding-bottom: 6px;
    float: right;
    text-decoration: none;
  }
  h3 a:hover {
    background-color: black;
  }

  // 모바일
  @media (max-width: 360px) {
    /* display: none; */
  }
`;
// nav wrapper
export const NavWrapper = styled.div`
  background-color: rgb(46 49 51 / 81%);
  user-select: none;
  h1 {
    left: 0;
    position: absolute;
    text-align: center;
    margin: 1%;
    margin-left: 3%;
    a {
      font-family: '궁서체';
      font-size: 110%;
      color: rgb(167 164 158);
    }
  }
  ul {
    list-style: none;
    text-align: center;
    a {
      color: rgb(233 233 233);
    }
    li {
      display: inline-block;
      font-size: 130%;
      width: 15%;
      padding: 1.4% 0% 1.4% 0%;
    }
    li:hover {
      background: rgb(62 60 59 / 35%);
    }
  }
`;

export const LayoutHeader = styled.header`
  margin: auto;
  width: 100%;
`;

export const FooterComponent = styled.footer`
  background-color: rgb(60, 65, 67);
  padding-top: 1%;
  padding-bottom: 1%;
  margin: auto;
  position: unset;
  bottom: 0;
  width: 100%;
  left: 0;
  p {
    margin-left: 10%;
    margin-top: 1%;
    color: #858585;
    a {
      margin-left: 1%;
      color: #858585;
    }
    a:hover {
      color: #fffdfd;
    }
  }
`;
