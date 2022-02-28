import React, { useState } from 'react';
import Link from 'next/link';

import { LoginWrapper, NavTop, MenuWrapper, MobileLoginWrapper, MobileVarWrapper } from './style/MainHomeMenuSt';

import { Menu } from 'antd';
import { MobileView } from 'react-device-detect';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const LoginForm = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleBar, setToggleBar] = useState(true);

  const toggleChange = () => {
    setToggleMenu(!toggleMenu);
    setToggleBar(!toggleBar);
  };

  const onMenuClick = () => {
    setToggleMenu(!toggleMenu);
    setToggleBar(!toggleBar);
  };

  return (
    <LoginWrapper>
      <h3>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>

        <Link href="/">
          <a>로그인</a>
        </Link>
      </h3>
      <MobileVarWrapper>
        <MobileView>
          <NavTop>
            <div type="primary" onClick={toggleChange}>
              {toggleBar ? <MenuOutlined className="menuOutlined" /> : <CloseOutlined className="CloseOutlined" />}
            </div>
          </NavTop>
          {toggleMenu && (
            <MenuWrapper
              defaultSelectedKeys={['1']}
              mode="inline"
              theme="light"
              inlineCollapsed={toggleBar}
              onClick={onMenuClick}
            >
              <Menu.Item key="signin">
                <Link href="/community">
                  <a>전체게시판</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="signin">
                <Link href={`/posts/자유게시글`}>
                  <a>자유게시판</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="signin">
                <Link href={`/posts/${'모임공지'}`}>
                  <a>모임 공지</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="signin">
                <Link href={`/posts/${'독후감'}`}>
                  <a>독 후 감</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="signin">
                <Link href={`/posts/${'건의게시판'}`}>
                  <a>건의게시판</a>
                </Link>
              </Menu.Item>
              <MobileLoginWrapper>
                <Menu.Item key="signin">
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
            </MenuWrapper>
          )}
        </MobileView>
      </MobileVarWrapper>
    </LoginWrapper>
  );
};

export default LoginForm;
