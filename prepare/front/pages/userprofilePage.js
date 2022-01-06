import React, { useCallback } from 'react';
import Head from 'next/head';

import { Wrapper, Box } from '../style/userprofilePageSt';

import AppLayout from '../components/AppLayout';

const UserProfilePage = ({ setIsLogedin }) => {
  const onSubmitClick = useCallback((e) => {
    e.preventDefault();
  }, []);

  const onLogout = useCallback(() => {
    setIsLogedin(false);
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
