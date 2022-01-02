import React from 'react';
import Link from 'next/link';

import { LoginSignupMenu, NavWrapper } from '../style/MainHomeMenuSt';

const MainHomeMenu = () => {
  return (
    <div>
      <LoginSignupMenu>
        <h3>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
          <Link href="/login">
            <a>로그인</a>
          </Link>
        </h3>
      </LoginSignupMenu>
      <NavWrapper>
        <h1>
          <Link href="/">
            <a>e도서관</a>
          </Link>
        </h1>
        <ul>
          <li>
            <Link href="/books">
              <a>책추천</a>
            </Link>
          </li>
          <li>
            <Link href="/community">
              <a>독후감</a>
            </Link>
          </li>
          <li>
            <Link href="/bookStore">
              <a>서 점</a>
            </Link>
          </li>
          <li>
            <Link href="/bookClass">
              <a>모 임</a>
            </Link>
          </li>
        </ul>
      </NavWrapper>
    </div>
  );
};

export default MainHomeMenu;
