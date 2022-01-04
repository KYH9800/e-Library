import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyle, LayoutHeader, LayoutMain, LayoutFooter } from './style/AppLayoutSt';

import MainHomeMenu from './MainHomeMenu/MainHomeMenu';
import MainHomeFooter from './MainHomeMenu/MainHomeFooter';

const AppLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <LayoutHeader>
        <nav>
          <MainHomeMenu />
        </nav>
      </LayoutHeader>
      <LayoutMain>
        <div>{children}</div>
      </LayoutMain>
      <LayoutFooter>
        <MainHomeFooter />
      </LayoutFooter>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
