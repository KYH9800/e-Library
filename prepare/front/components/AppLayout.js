import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyle, Header, Main, Footer } from '../styled-components/mainHeader';

import MainHeader from './MainHeader';

const AppLayout = ({ children }) => {
  return (
    <>
      <Header>
        <GlobalStyle />
        <MainHeader />
        <h3>우리나라 사람이면 가락좀 뽑잖아? 너의 목청 속 끼와 재능을 보여줘</h3>
      </Header>
      <Main>
        <div>{children}</div>
      </Main>
      <Footer>
        <>Contact</>
      </Footer>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
