import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { Emptyplace } from '../components/style/AppLayoutSt';

import AppLayout from '../components/AppLayout';

const Login = () => {
  // todo
  return (
    <AppLayout>
      <form>
        <Head>
          <title>K-Style | 로그인</title>
        </Head>
        <Emptyplace />
        <div>
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
          <div>
            <button type="submit" htmlType="submit">
              로그인
            </button>
          </div>
          <div>
            <div>
              <Link href="/signup">
                <a>회원가입</a>
              </Link>
            </div>
            <div>
              <a>아이디 찾기</a>
            </div>
          </div>
        </div>
      </form>
    </AppLayout>
  );
};

export default Login;
