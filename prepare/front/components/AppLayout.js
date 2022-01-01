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
        <p>Contact</p>
      </footer>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
