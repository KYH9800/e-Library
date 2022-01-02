import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { Emptyplace } from '../components/style/AppLayoutSt';

import AppLayout from '../components/AppLayout';

const Signup = () => {
  // todo
  return (
    <AppLayout>
      <>
        <form>
          <Head>
            <title>K-Style | 회원가입</title>
          </Head>
          <Emptyplace />
          <div>회원가입</div>
          <div>
            <label htmlFor="user-nickname">닉네임</label>
            <br />
            <input type="nickname" name="user-nickname" required />
          </div>
          <div>
            <label htmlFor="user-email">이메일</label>
            <br />
            <input type="email" name="user-email" required />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <input type="password" name="user-password" required />
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호 확인</label>
            <br />
            <input type="password" name="user-password-check" required />
            <div>비밀번호가 일치하지 않습니다.</div>
            <div>
              <checkbox name="user-term">check: 관리자의 말을 잘 들을 것을 동의합니다.</checkbox>
              <div>약관에 동의하셔야 합니다.</div>
            </div>
            <div>
              <button type="submit" htmlType="submit">
                가입하기
              </button>
            </div>
          </div>
        </form>
      </>
    </AppLayout>
  );
};

export default Signup;
