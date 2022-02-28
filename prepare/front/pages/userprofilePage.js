import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Router from 'next/router';
import { END } from 'redux-saga';
import axios from 'axios';
import { wrapper } from '../store/configureStore';

import { ProfileWrapper, Box } from '../style/userprofilePageSt';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';
import { logoutAction, CHANGE_NICKNAME_REQUEST, LOAD_MY_INFO_REQUEST } from '../reducers/user';

const UserProfilePage = () => {
  const dispatch = useDispatch();
  const [nickname, setChangeNickname] = useInput('');
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (!me) {
      Router.push('/');
    }
  });

  const onSubmitClick = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: CHANGE_NICKNAME_REQUEST,
        data: nickname,
      });
      console.log('changeNickname: ', nickname);
    },
    [nickname],
  );

  const onLogout = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  const onClickBtn = useCallback(() => {
    Router.push('/community');
  }, []);

  return (
    <>
      <Head>
        <title>e도서관 | 내 프로필</title>
      </Head>
      <AppLayout>
        <ProfileWrapper>
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
              <button onClick={onClickBtn}>게시판</button>
            </div>
          </Box>
        </ProfileWrapper>
      </AppLayout>
    </>
  );
};

// getServerSideProps: 브라우저는 개입 못함, 순전히 Front Server에서 실해됨
export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  console.log('getServerSideProps req: ', req);
  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = ''; // 서버에서 다른 사람과 cookie가 공유되는 문제를 방지하고자 초기화를 해준다.
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie; // 서버에서 요청일때랑 cookie가 있으면 설정한 cookie를 넣어준다.
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch(END);
  console.log('getServerSideProps end');
  await store.sagaTask.toPromise();
});

export default UserProfilePage;
