import React from 'react';
import Head from 'next/head';

import { GlobalStyle } from '../components/style/AppLayoutSt';
import { HomeWrapper } from '../style/indexSt';

import AppLayout from '../components/AppLayout';

const Home = () => {
  return (
    <AppLayout>
      <Head>
        <title>K-Style</title>
      </Head>
      <GlobalStyle />
      <header>
        <HomeWrapper>
          <div>
            <a>개발자 깃헙</a>
            <a>개발자 블로그</a>
            <a>연락처</a>
          </div>
        </HomeWrapper>
      </header>
      <div>메인 홈</div>
    </AppLayout>
  );
};

export default Home;
