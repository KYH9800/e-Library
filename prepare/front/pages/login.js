import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { Box, EmailInputTag, PasswordInputTag, CheckSaveId, ButtonRapper } from '../style/loginSt';

import AppLayout from '../components/AppLayout';

const Login = () => {
  const [isLogedin, setIsLogedin] = useState(false);
  console.log(isLogedin);

  const onSubmitform = useCallback((e) => {
    e.preventDefault();
    setIsLogedin(true);
  }, []);

  return (
    <AppLayout isLogedin={isLogedin} setIsLogedin={setIsLogedin}>
      <Head>
        <title>e도서관 | 로그인</title>
      </Head>
      <Box>
        <form onSubmit={onSubmitform}>
          <h1>로그인</h1>
          <h2>e도서관 이용을 위해 로그인을 해주세요</h2>
          <EmailInputTag>
            <label htmlFor="user-email">아이디</label>
            <input type="email" required />
          </EmailInputTag>
          <PasswordInputTag>
            <label htmlFor="password">비밀번호</label>
            <input type="password" required />
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
              <a>아이디 찾기</a>
            </div>
          </CheckSaveId>
          <ButtonRapper>
            <button type="submit" htmltype="submit">
              <span>로그인</span>
            </button>
          </ButtonRapper>
        </form>
      </Box>
    </AppLayout>
  );
};

export default Login;
