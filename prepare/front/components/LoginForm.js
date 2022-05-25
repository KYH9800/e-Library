import React from 'react';
import Link from 'next/link';
// CSS
import { LoginFormWrapper } from './style/MainHomeMenuSt';

const LoginForm = () => {
  return (
    <LoginFormWrapper>
      <Link href="/signup">
        <a id="loginForm-btn">회원가입</a>
      </Link>
      <Link href="/">
        <a id="loginForm-btn2">로그인</a>
      </Link>
    </LoginFormWrapper>
  );
};

export default LoginForm;
