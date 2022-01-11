import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Router from 'next/router';

import { Wrapper, Box } from '../style/userprofilePageSt';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';
import { logoutAction, CHANGE_NICKNAME } from '../reducers/user';

const UserProfilePage = () => {
  const dispatch = useDispatch();
  const [nickname, setChangeNickname] = useInput('');
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (!me) {
      Router.push('/login');
    }
  });

  const onSubmitClick = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: CHANGE_NICKNAME,
        data: nickname,
      });
      console.log('changeNickname: ', nickname);
    },
    [nickname],
  );

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
          <Box>
            <form onSubmit={onSubmitClick}>
              <h2>닉네임 변경하기</h2>
              <div>
                <input type="text" value={nickname} onChange={setChangeNickname} />
                <button>변경하기</button>
              </div>
            </form>
            <div>
              <button onClick={onLogout}>로그아웃</button>
              <button>회원탈퇴</button>
            </div>
          </Box>
        </Wrapper>
      </AppLayout>
    </>
  );
};

export default UserProfilePage;
