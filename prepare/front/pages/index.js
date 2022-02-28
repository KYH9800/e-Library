import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import { END } from 'redux-saga';
import axios from 'axios';
import { wrapper } from '../store/configureStore';

import { Box, EmailInputTag, PasswordInputTag, CheckSaveId, ButtonRapper, HomeLogo } from '../style/loginSt';
import { GlobalStyle } from '../components/style/AppLayoutSt';
// import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';

import { loginAction, LOAD_MY_INFO_REQUEST } from '../reducers/user';

const Login = () => {
  const dispatch = useDispatch();
  const { me, loginError } = useSelector((state) => state.user);

  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  useEffect(() => {
    if (loginError) {
      alert(loginError);
    }
  }, [loginError]);

  useEffect(() => {
    if (me) {
      Router.push('/community');
      // console.log('me data', me);
    }
  });

  const onSubmitform = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(loginAction({ email, password }));
    },
    [email, password],
  );

  const onClickUnlogin = useCallback(() => {
    Router.push('/community');
  });

  return (
    <>
      <Head>
        <title>e도서관 | 로그인</title>
      </Head>
      <GlobalStyle />
      <HomeLogo>
        <Link href="/community">
          <a>e-도서관</a>
        </Link>
      </HomeLogo>
      <Box>
        <form onSubmit={onSubmitform}>
          <h1>로그인</h1>
          <h2>e도서관 이용을 위해 로그인을 해주세요</h2>
          <EmailInputTag>
            <label htmlFor="user-email">아이디</label>
            <input type="email" name="user-email" required value={email} onChange={onChangeEmail} />
          </EmailInputTag>
          <PasswordInputTag>
            <label htmlFor="password">비밀번호</label>
            <input type="password" required value={password} onChange={onChangePassword} />
          </PasswordInputTag>
          <CheckSaveId>
            <label>
              <input type="checkbox" name="isSaved" />
              <p>아이디 저장</p>
            </label>
            <div>
              <Link href="/signup">
                <a>회원가입</a>
              </Link>
            </div>
          </CheckSaveId>
          <ButtonRapper>
            <button type="submit" htmltype="submit">
              <span>로그인</span>
            </button>
            <br />
            <button type="button" onClick={onClickUnlogin}>
              <span>비회원으로 시작하기</span>
            </button>
          </ButtonRapper>
        </form>
      </Box>
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

export default Login;
