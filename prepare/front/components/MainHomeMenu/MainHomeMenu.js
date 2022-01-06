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
            <div>
              <Link href="/books">
                <a>책추천 및 구매</a>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link href="/community">
                <a>커뮤니티</a>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link href="/chatRoom">
                <a>실시간 대화방</a>
              </Link>
            </div>
          </li>
        </ul>
      </NavWrapper>
    </div>
  );
};

export default MainHomeMenu;
