import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Router from 'next/router';

import { Wrapper, Box } from '../style/userprofilePageSt';

import AppLayout from '../components/AppLayout';

import { logoutAction } from '../reducers/user';

const UserProfilePage = () => {
  const dispatch = useDispatch();
  const { isLogedin } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isLogedin) {
      Router.push('/login');
    }
  });

  const onSubmitClick = useCallback((e) => {
    e.preventDefault();
  }, []);

  const onLogout = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <>
      <Head>
        <title>e도서관 | 내 프로필</title>
      </Head>
      <AppLayout>
        <Wrapper>
          <h1>내 프로필</h1>
          <form onSubmit={onSubmitClick}>
            <Box>
              <h2>닉네임 변경하기</h2>
              <div>
                <input type="text" />
                <button>변경하기</button>
              </div>
              <div>
                <button onClick={onLogout}>로그아웃</button>
                <button>회원탈퇴</button>
              </div>
            </Box>
          </form>
        </Wrapper>
      </AppLayout>
    </>
  );
};

export default UserProfilePage;
