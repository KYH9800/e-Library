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
        <video preload="auto" autoplay="true" loop="loop" muted="muted" volume="0">
          <source src="" />
        </video>
        <HomeWrapper>
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
        </HomeWrapper>
      </header>
      <div>메인 홈</div>
    </AppLayout>
  );
};

export default Home;
