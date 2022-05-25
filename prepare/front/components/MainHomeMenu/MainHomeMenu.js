import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { logoutAction } from '../../reducers/user';

import { MenuVarWrapper } from '../style/MainHomeMenuSt';

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
    <MenuVarWrapper>
      <div id="nav-top">{me ? <UserProfile /> : <LoginForm />}</div>
      <div id="nav-bottom">
        <div className="home-logo">
          <Link href="/community">
            <a>e-게시판</a>
          </Link>
        </div>
        <ul>
          <Link href="/community">
            <a>
              <li>전체게시판</li>
            </a>
          </Link>
          <Link href={`/posts/자유게시글`}>
            <a>
              <li>자유게시판</li>
            </a>
          </Link>
          <Link href={`/posts/모임공지`}>
            <a>
              <li>모임 공지</li>
            </a>
          </Link>
          <Link href={`/posts/독후감`}>
            <a>
              <li>독 후 감</li>
            </a>
          </Link>
          <Link href={`/posts/건의게시판`}>
            <a>
              <li>건의게시판</li>
            </a>
          </Link>
        </ul>
      </div>
    </MenuVarWrapper>
  );
};

export default MainHomeMenu;
