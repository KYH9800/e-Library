import Link from 'next/link';
import React from 'react';

const Signup = () => {
  // todo

  return (
    <form>
      <div>
        <Link href="/">
          <a>K-Style</a>
        </Link>
      </div>
      <div>회원가입</div>
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
          <button>
            <Link href="/login">
              <a>로그인</a>
            </Link>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Signup;
