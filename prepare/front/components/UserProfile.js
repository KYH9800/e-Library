import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { logoutAction } from '../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    console.log('me: ', me);
  }, [me]);

  const onLogout = useCallback(() => {
    console.log('로그아웃');
    dispatch(logoutAction());
  }, []);

  return (
    <>
      <h3>
        <Link href="/userprofilePage">
          <a>내 프로필</a>
        </Link>
        <button onClick={onLogout}>로그아웃</button>
        <span>{me.nickname}님</span>
      </h3>
    </>
  );
};

export default UserProfile;
