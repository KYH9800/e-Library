import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Login = () => {
  return (
    <form>
      <Head>
        <title>K-Style | Login</title>
      </Head>
      <div>
        <div>
          <Link href="/">
            <a>e도서관</a>
          </Link>
        </div>
        <div>로그인</div>
        <div>
          <label htmlFor="user-email">아이디</label>
          <br />
          <input type="email" required />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <br />
          <input type="password" required />
        </div>
        <button type="submit" htmlType="submit">
          로그인
        </button>
        <Link href="/signup">
          <a>
            <button>회원가입</button>
          </a>
        </Link>
      </div>
    </form>
  );
};

export default Login;
