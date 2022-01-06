import React, { useCallback } from 'react';
import Link from 'next/link';

const UserProfile = ({ setIsLogedin }) => {
  const onLogout = useCallback(() => {
    setIsLogedin(false);
  }, []);

  return (
    <>
      <h3>
        <Link href="/userprofilePage">
          <a>내 프로필</a>
        </Link>
        <button onClick={onLogout}>로그아웃</button>
        <span>닉네임 님</span>
      </h3>
    </>
  );
};

export default UserProfile;
