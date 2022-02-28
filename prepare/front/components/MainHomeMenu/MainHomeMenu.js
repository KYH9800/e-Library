import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { logoutAction } from '../../reducers/user';

import {
  LoginSignupMenu,
  NavWrapper,
  LayoutHeader,
  LoginWrapper,
  NavTop,
  MobileLoginWrapper,
  MobileVarWrapper,
  MenuWrapper,
} from '../style/MainHomeMenuSt';

import LoginForm from '../LoginForm';
import UserProfile from '../UserProfile';

import { Menu } from 'antd';
// import { MobileView } from 'react-device-detect';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const MainHomeMenu = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleBar, setToggleBar] = useState(true);

  const toggleChange = useCallback(() => {
    setToggleMenu(!toggleMenu);
    setToggleBar(!toggleBar);
  }, [toggleMenu, toggleBar]);

  const onMenuClick = useCallback(() => {
    setToggleMenu(!toggleMenu);
    setToggleBar(!toggleBar);
  }, [toggleMenu, toggleBar]);

  const onLogout = useCallback(() => {
    console.log('로그아웃');
    dispatch(logoutAction());
  }, []);

  return (
    <nav>
      <LayoutHeader>
        <LoginSignupMenu>
          <>{me ? <UserProfile /> : <LoginForm />}</>
        </LoginSignupMenu>
        <NavWrapper>
          <h1>
            <Link href="/community">
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
            <Link href={`/posts/모임공지`}>
              <a>
                <li>
                  <span>모임 공지</span>
                </li>
              </a>
            </Link>
            <Link href={`/posts/독후감`}>
              <a>
                <li>
                  <span>독 후 감</span>
                </li>
              </a>
            </Link>
            <Link href={`/posts/건의게시판`}>
              <a>
                <li>
                  <span>건의게시판</span>
                </li>
              </a>
            </Link>
          </ul>
        </NavWrapper>

        <MobileVarWrapper>
          <NavTop>
            <div type="primary" onClick={toggleChange}>
              {toggleBar ? <MenuOutlined className="menuOutlined" /> : <CloseOutlined className="CloseOutlined" />}
            </div>
          </NavTop>
          {toggleMenu && (
            <MenuWrapper
              key="menu"
              defaultSelectedKeys={['1']}
              mode="inline"
              theme="light"
              inlineCollapsed={toggleBar}
              onClick={onMenuClick}
            >
              <Menu.Item key="allPosts">
                <Link href="/community">
                  <a>전체게시판</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="freePosts">
                <Link href={`/posts/자유게시글`}>
                  <a>자유게시판</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="clubPosts">
                <Link href={`/posts/모임공지`}>
                  <a>모임 공지</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="writePosts">
                <Link href={`/posts/독후감`}>
                  <a>독 후 감</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="questionPosts">
                <Link href={`/posts/건의게시판`}>
                  <a>건의게시판</a>
                </Link>
              </Menu.Item>
              {me ? (
                <>
                  <MobileLoginWrapper>
                    <div>{me.nickname}님</div>
                    <Menu.Item key="userprofilePage">
                      <Link href="/userprofilePage">
                        <a>내 프로필</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="myPosts">
                      <Link href={`/user/${me.id}`}>
                        <a>내 게시글</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="logout">
                      <a onClick={onLogout}>로그아웃</a>
                    </Menu.Item>
                  </MobileLoginWrapper>
                </>
              ) : (
                <>
                  <MobileLoginWrapper>
                    <Menu.Item key="login">
                      <Link href="/">
                        <a>로그인</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="signup">
                      <Link href="/signup">
                        <a>회원가입</a>
                      </Link>
                    </Menu.Item>
                  </MobileLoginWrapper>
                </>
              )}
            </MenuWrapper>
          )}
        </MobileVarWrapper>
      </LayoutHeader>
    </nav>
  );
};

export default MainHomeMenu;
