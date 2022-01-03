import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyle } from './style/AppLayoutSt';

import MainHomeMenu from './MainHomeMenu/MainHomeMenu';
import MainHomeFooter from './MainHomeMenu/MainHomeFooter';

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
        <MainHomeFooter />
      </footer>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
