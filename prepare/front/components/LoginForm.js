import React from 'react';
import Link from 'next/link';

const LoginForm = () => {
  return (
    <>
      <h3>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
        <Link href="/login">
          <a>로그인</a>
        </Link>
      </h3>
    </>
  );
};

export default LoginForm;
