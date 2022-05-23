import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
// css
import { UserProfileWrapper } from './style/MainHomeMenuSt';
// components
import { logoutAction } from '../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  const onLogout = useCallback(() => {
    console.log('로그아웃');
    dispatch(logoutAction());
  }, []);

  return (
    <UserProfileWrapper>
      <span className="user-name">{me.nickname}님</span>
      <Link href="/userprofilePage">
        <a id="loginForm-btn">내 프로필</a>
      </Link>
      <Link href={`/user/${me.id}`}>
        <a id="loginForm-btn">내 게시글</a>
      </Link>
      <span className="logout-btn" onClick={onLogout}>
        로그아웃
      </span>
    </UserProfileWrapper>
  );
};

export default UserProfile;
