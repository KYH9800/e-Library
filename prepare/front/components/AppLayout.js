import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyle } from './style/AppLayoutSt';

import MainHomeMenu from './MainHomeMenu/MainHomeMenu';

const AppLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <nav>
        <MainHomeMenu />
      </nav>
      <main>
        <div>{children}</div>
      </main>
      <footer>
        <div>
          <a>
            <span>개발자 깃헙</span>
          </a>
          <a>
            <span>개발자 블로그</span>
          </a>
          <a>
            <span>연락처</span>
          </a>
        </div>
      </footer>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
