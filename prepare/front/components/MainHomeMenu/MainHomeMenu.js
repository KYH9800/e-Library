import React, { useCallback } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { LoginSignupMenu, NavWrapper } from '../style/MainHomeMenuSt';

import LoginForm from '../LoginForm';
import UserProfile from '../UserProfile';

const MainHomeMenu = () => {
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  const categoryClick = useCallback((category) => () => {
    console.log('category: ', category);
  });

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
          <Link href="/">
            <a>
              <li>
                <span>전체게시판</span>
              </li>
            </a>
          </Link>
          <Link href={`posts/${'자유게시글'}`}>
            <a>
              <li>
                <span>자유게시판</span>
              </li>
            </a>
          </Link>
          <Link href={`/community`}>
            <a>
              <li>
                <span>모임 공지</span>
              </li>
            </a>
          </Link>
          <Link href={`/community`}>
            <a>
              <li>
                <span>독 후 감</span>
              </li>
            </a>
          </Link>
          <Link href={`/community`}>
            <a>
              <li>
                <span>건의게시판</span>
              </li>
            </a>
          </Link>
          {/* <Link href="/chatRoom">
            <a>
              <li>
                <span>자유대화방</span>
              </li>
            </a>
          </Link> */}
        </ul>
      </NavWrapper>
    </div>
  );
};

export default MainHomeMenu;
