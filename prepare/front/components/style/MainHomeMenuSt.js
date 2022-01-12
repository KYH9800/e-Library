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
`;
// nav wrapper
export const NavWrapper = styled.div`
  background-color: rgba(46, 49, 51, 0.3);
  height: 90px;
  user-select: none;
  h1 {
    position: fixed;
    margin: 8px;
    margin-left: 25px;
    a {
      padding: 16px;
      font-family: '궁서체';
      font-size: 50px;
      color: rgb(167 164 158);
    }
  }
  ul {
    list-style: none;
    /* margin: 0px; */
    text-align: center;
    a {
      color: rgb(233 233 233);
    }
    li {
      display: inline-block;
      font-size: 23px;
      width: 200px;
      padding: 27px 0px 27px 0px;
    }
    li:hover {
      background: rgb(62 60 59 / 35%);
    }
  }
`;
export const FooterComponent = styled.div`
  background-color: rgb(60, 65, 67);
  margin: auto;
  width: 1200px;
  height: 266px;
  header {
    user-select: none;
    text-align: center;
    display: flex;
  }
  header a {
    font-family: '고딕';
    font-size: 16px;
    color: #edeaf5;
    margin-top: 15px;
    padding: 5px 5px 5px 7px;
    text-align: center;
    display: block;
    width: 150px;
    span {
      color: rgb(200 199 196);
    }
  }
  header a:hover {
    background: #1615157d;
  }
  p {
    margin-top: 15px;
    color: #858585;
    a {
      margin-left: 3px;
      color: #858585;
    }
    a:hover {
      color: #fffdfd;
    }
  }
  div {
    border-top: 1px solid white;
  }
`;
