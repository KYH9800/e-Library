import React from 'react';
import Link from 'next/link';

const Login = () => {
  return (
    <form>
      <div>
        <div>
          <Link href="/">
            <a>K-Style</a>
          </Link>
        </div>
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
