import styled from 'styled-components';

// LoginSignupMenu
export const LoginSignupMenu = styled.div`
  background-color: rgb(42 40 40);
  height: 37px;
  margin-top: -8px;
  h3 {
    margin-right: 10px;
  }
  h3 a {
    color: white;
    font-size: 15px;
    margin-top: 5px;
    margin-right: 10px;
    padding: 3px;
    float: right;
    text-decoration: none;
  }
`;
// nav wrapper
export const NavWrapper = styled.div`
  background-color: rgb(46 45 45 / 76%);
  height: 90px;
  h1 {
    position: fixed;
    a img {
      width: 89%;
      margin-left: 0px;
      margin-top: 0px;
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
      color: white;
      padding: 32px;
      padding-right: 35px;
      padding-left: 35px;
    }
    li a:hover {
      background: #1615157d;
    }
  }
`;
