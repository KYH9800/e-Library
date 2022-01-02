import styled from 'styled-components';

// LoginSignupMenu
export const LoginSignupMenu = styled.div`
  background-color: rgb(28 28 28 / 83%);
  height: 37px;
  margin-top: -8px;
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
`;
// nav wrapper
export const NavWrapper = styled.div`
  background-color: rgb(62 60 59 / 30%);
  height: 90px;
  h1 {
    position: fixed;
    margin: 8px;
    margin-left: 25px;
    a {
      padding: 16px;
      font-family: '궁서체';
      font-size: 50px;
      color: #382b2bcf;
    }
  }
  ul {
    list-style: none;
    margin: 0px;
    text-align: center;
    li {
      display: inline-block;
      font-size: 23px;
      margin: 28px;
      margin-left: 0px;
      margin-right: 0px;
    }
    li a {
      color: #403737;
      padding: 32px;
      padding-right: 35px;
      padding-left: 35px;
    }
    li a:hover {
      background: rgb(62 60 59 / 35%);
    }
  }
`;
