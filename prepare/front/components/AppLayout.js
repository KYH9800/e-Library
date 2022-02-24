import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyle, LayoutHeader, LayoutMain } from './style/AppLayoutSt';

import MainHomeMenu from './MainHomeMenu/MainHomeMenu';
import MainHomeFooter from './MainHomeMenu/MainHomeFooter';

const AppLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <MainHomeMenu />
      <LayoutMain>
        <div>{children}</div>
      </LayoutMain>
      <MainHomeFooter />
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
