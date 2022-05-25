import styled from 'styled-components';
import { Menu } from 'antd';

// MenuVarWrapper
export const MenuVarWrapper = styled.nav`
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  background-color: #424040fa;

  #nav-top {
    text-align: end;
    background-color: #363636d1;
    width: 100%;
  }

  #nav-bottom {
    position: relative;
    margin: auto;
    margin: 10px 0;
  }

  #nav-bottom .home-logo {
    position: absolute;
    top: -2px;
    left: 25px;
    a {
      color: #fff;
      font-size: 20px;
      font-weight: 600;
    }
  }

  ul {
    width: 830px;
    margin: auto;
    /* margin: 0; */
    list-style: none;
    text-align: center;
    a {
      color: #fff;
      font-size: 16px;
      font-weight: 400;
    }
  }
  li {
    display: inline;
    padding: 13px 25px;
  }
  li:hover {
    background-color: #363636d1;
  }
`;

export const LoginFormWrapper = styled.div`
  height: 30px;
  /* margin-right: 10px; */
  padding-top: 3px;
  #loginForm-btn2 {
    padding: 6px 15px !important;
  }
  #loginForm-btn,
  #loginForm-btn2 {
    color: #fff;
    padding: 6px 10px;
    font-size: 13px;
    font-weight: 400;
  }
  #loginForm-btn:hover,
  #loginForm-btn2:hover {
    background-color: #191919;
  }
`;

export const UserProfileWrapper = styled.div`
  height: 30px;
  /* margin-right: 25px; */
  padding-top: 3px;
  #loginForm-btn {
    color: #fff;
    padding: 7px 10px;
    font-size: 13px;
    font-weight: 400;
  }
  #loginForm-btn:hover {
    background-color: #191919;
  }
  .logout-btn {
    cursor: pointer;
    padding: 7px 15px;
    border: 0;
    width: 65px;
    height: 25px;
    color: #0095f6;
    font-size: 13px;
    font-weight: 500;
  }
  .user-name {
    user-select: none;
    padding: 7px 10px;
    font-size: 13px;
    color: #fff;
  }
  .logout-btn:hover {
    background-color: #191919;
    /* background-color: #191919; */
  }
`;

// footer
export const FooterComponent = styled.div`
  position: absolute;
  bottom: 15px;
  margin-left: 20px;
  margin-top: 100px;
  font-size: 13px;
  line-height: 8px;
  // footer 내용 키워드
  .name {
    font-weight: 600;
  }
  .adress {
    font-weight: 400;
  }
  .contect {
    font-weight: 700;
  }
  .phone {
    font-weight: 400;
  }
  .time {
    font-weight: 600;
  }
  .email {
    font-weight: 700;
  }
  .email-adress {
    font-weight: 600;
  }
`;
