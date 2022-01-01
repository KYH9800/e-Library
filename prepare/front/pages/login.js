import React from 'react';
import Link from 'next/link';

const Login = () => {
  return (
    <>
      <div>
        <Link href="/">
          <a>K-Style</a>
        </Link>
        <input type="email" />
        <input type="password" />
        <button>로그인</button>
        <Link href="/signup">
          <a>
            <button>회원가입</button>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Login;
