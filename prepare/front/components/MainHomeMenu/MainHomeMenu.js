import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { LoginSignupMenu, NavWrapper } from '../style/MainHomeMenuSt';

import LoginForm from '../LoginForm';
import UserProfile from '../UserProfile';

const MainHomeMenu = () => {
  const { me } = useSelector((state) => state.user);

  return (
    <div>
      <LoginSignupMenu>
        <>{me ? <UserProfile /> : <LoginForm />}</>
      </LoginSignupMenu>
      <NavWrapper>
        <h1>
          <Link href="/">
            <a>e도서관</a>
          </Link>
        </h1>
        <ul>
          <Link href="/community">
            <li>
              <span>전체게시판</span>
            </li>
          </Link>
          <Link href={`/`}>
            <li>
              <span>자유게시판</span>
            </li>
          </Link>
          <Link href={`/`}>
            <li>
              <span>모임 공지</span>
            </li>
          </Link>
          <Link href={`/`}>
            <li>
              <span>독 후 감</span>
            </li>
          </Link>
          <Link href={`/`}>
            <li>
              <span>건의게시판</span>
            </li>
          </Link>
          <Link href="/chatRoom">
            <li>
              <span>자유대화방</span>
            </li>
          </Link>
        </ul>
      </NavWrapper>
    </div>
  );
};

export default MainHomeMenu;
