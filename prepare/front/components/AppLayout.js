import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyle, Main } from './style/AppLayoutSt';

import MainHomeMenu from './MainHomeMenu/MainHomeMenu';
import MainHomeFooter from './MainHomeMenu/MainHomeFooter';

const AppLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <MainHomeMenu />
      <Main>
        <div>{children}</div>
      </Main>
      <MainHomeFooter />
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
