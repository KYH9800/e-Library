import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Router from 'next/router';
import { END } from 'redux-saga';
import axios from 'axios';
import { wrapper } from '../store/configureStore';

import { ProfileWrapper } from '../style/userprofilePageSt';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';
import { logoutAction, CHANGE_NICKNAME_REQUEST, LOAD_MY_INFO_REQUEST } from '../reducers/user';

const UserProfilePage = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const [nickname, setChangeNickname] = useInput(me.nickname || '');

  useEffect(() => {
    if (!me) {
      Router.push('/');
    }
  });

  const onSubmitClick = useCallback(
    (e) => {
      e.preventDefault();
      if (confirm(`닉네임을 변경하시겠습니까?`)) {
        dispatch({
          type: CHANGE_NICKNAME_REQUEST,
          data: nickname,
        });
        console.log('changeNickname: ', nickname);
      }
    },
    [nickname],
  );

  const onLogout = useCallback(() => {
    if (confirm(`로그아웃을 하시겠습니까?`)) {
      dispatch(logoutAction());
    }
  }, []);

  const onClickBtn = useCallback(() => {
    if (confirm(`게시글 목록 페이지로 이동합니다.`)) {
      Router.push('/community');
    }
  }, []);

  return (
    <AppLayout>
      <ProfileWrapper>
        <Head>
          <title>e도서관 | 내 프로필</title>
        </Head>
        <h1>내 프로필</h1>
        <div id="profile-wrapper">
          <form onSubmit={onSubmitClick}>
            <h2>닉네임 변경</h2>
            <div className="input-wrapper">
              <input
                type="text"
                value={nickname}
                onChange={setChangeNickname}
                placeholder="변경할 닉네임을 입력해주세요."
              />
              <button>변경하기</button>
            </div>
          </form>
          <div className="btn-wrapper">
            <button onClick={onClickBtn}>게시판</button>
            <button onClick={onLogout}>로그아웃</button>
          </div>
        </div>
      </ProfileWrapper>
    </AppLayout>
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
