import React from 'react';
import Link from 'next/link';

import { Position } from '../styled-components/mainHeader';
import { SubHeader } from '../styled-components/subHeader';

const MainHeader = () => {
  // todo

  return (
    <SubHeader>
      <Position>
        <p>
          <Link href="/login">
            <a>로그인</a>
          </Link>
          <Link href="/signup">
            <a> 회원가입</a>
          </Link>
        </p>
        <nav>
          <h1>
            <Link href="/">
              <a>K-Style</a>
            </Link>
          </h1>
          <ul>
            <li>
              <Link href="/music">
                <a>뮤직</a>
              </Link>
            </li>
            <li>
              <Link href="/community">
                <a>커뮤니티</a>
              </Link>
            </li>
            <li>
              <Link href="/musicShop">
                <a>뮤직샵</a>
              </Link>
            </li>
            <li>
              <Link href="/customer">
                <a>고객문의</a>
              </Link>
            </li>
          </ul>
        </nav>
      </Position>
    </SubHeader>
  );
};

export default MainHeader;
