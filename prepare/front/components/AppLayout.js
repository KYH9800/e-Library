import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { GlobalStyle, Header, Nav, Htag, Ul, Li, H2 } from '../styled-components/styles';

const AppLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Nav>
          <Htag>
            <Link href="/">
              <a>K-Style</a>
            </Link>
          </Htag>
          <Ul>
            <Li>
              <Link href="music">
                <a>뮤직</a>
              </Link>
            </Li>
            <Li>
              <Link href="/community">
                <a>커뮤니티</a>
              </Link>
            </Li>
            <Li>
              <Link href="/musicShop">
                <a>뮤직샵</a>
              </Link>
            </Li>
            <Li>
              <Link href="/customer">
                <a>고객문의</a>
              </Link>
            </Li>
          </Ul>
          <H2>
            <Link href="/login">
              <a>로그인 및 회원가입</a>
            </Link>
          </H2>
        </Nav>
      </Header>
      <main>
        <div>{children}</div>
      </main>
      <footer>
        <>Contact</>
      </footer>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
