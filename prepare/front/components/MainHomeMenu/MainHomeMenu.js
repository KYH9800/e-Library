import React from 'react';
import Link from 'next/link';

import { LoginSignupMenu, NavWrapper } from '../style/MainHomeMenuSt';

import LoginForm from '../LoginForm';
import UserProfile from '../UserProfile';

const MainHomeMenu = ({ isLogedin, setIsLogedin }) => {
  return (
    <div>
      <LoginSignupMenu>
        <>{isLogedin ? <UserProfile setIsLogedin={setIsLogedin} /> : <LoginForm />}</>
      </LoginSignupMenu>
      <NavWrapper>
        <h1>
          <Link href="/">
            <a>e도서관</a>
          </Link>
        </h1>
        <ul>
          <Link href="/books">
            <a>
              <li>
                <div>책추천 및 구매</div>
              </li>
            </a>
          </Link>
          <Link href="/community">
            <a>
              <li>
                <div>커뮤니티</div>
              </li>
            </a>
          </Link>
          <Link href="/chatRoom">
            <a>
              <li>
                <div>실시간 대화방</div>
              </li>
            </a>
          </Link>
        </ul>
      </NavWrapper>
    </div>
  );
};

export default MainHomeMenu;
