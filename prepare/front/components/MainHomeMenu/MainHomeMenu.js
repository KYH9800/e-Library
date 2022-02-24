import React, { useCallback } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { LoginSignupMenu, NavWrapper, LayoutHeader } from '../style/MainHomeMenuSt';

import LoginForm from '../LoginForm';
import UserProfile from '../UserProfile';

const MainHomeMenu = () => {
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  // console.log(
  //   'category list mainPosts: ',
  //   mainPosts.map((v) => v.category),
  // );

  return (
    <nav>
      <LayoutHeader>
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
              <a>
                <li>
                  <span>전체게시판</span>
                </li>
              </a>
            </Link>
            <Link href={`/posts/자유게시글`}>
              <a>
                <li>
                  <span>자유게시판</span>
                </li>
              </a>
            </Link>
            <Link href={`/posts/${'모임공지'}`}>
              <a>
                <li>
                  <span>모임 공지</span>
                </li>
              </a>
            </Link>
            <Link href={`/posts/${'독후감'}`}>
              <a>
                <li>
                  <span>독 후 감</span>
                </li>
              </a>
            </Link>
            <Link href={`/posts/${'건의게시판'}`}>
              <a>
                <li>
                  <span>건의게시판</span>
                </li>
              </a>
            </Link>
          </ul>
        </NavWrapper>
      </LayoutHeader>
    </nav>
  );
};

export default MainHomeMenu;
