import React from 'react';
import Link from 'next/link';

import { LoginSignupMenu, NavWrapper } from '../style/MainHomeMenuSt';

const MainHomeMenu = () => {
  return (
    <div>
      <LoginSignupMenu>
        <h3>
          <Link href="/login">
            <a>로그인</a>
          </Link>
          <Link href="/signup">
            <a> 회원가입</a>
          </Link>
        </h3>
      </LoginSignupMenu>
      <NavWrapper>
        <h1>
          <Link href="/">
            <a>
              <img src="" />
            </a>
          </Link>
        </h1>
        <ul>
          <li>
            <Link href="/music">
              <a>뮤직</a>
            </Link>
          </li>
          <li>
            <Link href="/community">
              <a>커뮤니티</a>
            </Link>
          </li>
          <li>
            <Link href="/musicShop">
              <a>뮤직샵</a>
            </Link>
          </li>
          <li>
            <Link href="/customer">
              <a>고객문의</a>
            </Link>
          </li>
        </ul>
      </NavWrapper>
    </div>
  );
};

export default MainHomeMenu;
