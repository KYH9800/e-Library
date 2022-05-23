import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyle, Wrapper } from './style/AppLayoutSt';

import MainHomeMenu from './MainHomeMenu/MainHomeMenu';
import MainHomeFooter from './MainHomeMenu/MainHomeFooter';

const AppLayout = ({ children }) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <MainHomeMenu />
      <div id="wrapper">
        <main>
          <div>{children}</div>
        </main>
        <footer>
          <MainHomeFooter />
        </footer>
      </div>
    </Wrapper>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
