import React from 'react';
import Head from 'next/head';

import { GlobalStyle } from '../components/style/AppLayoutSt';
import { HomeWrapper } from '../style/indexSt';

import AppLayout from '../components/AppLayout';

const Home = () => {
  return (
    <AppLayout>
      <Head>
        <title>e도서관</title>
      </Head>
      <GlobalStyle />
      <header>
        <HomeWrapper>
          <div>
            <a>
              <span>인기도서</span>
            </a>
            <a>
              <span>인기 독후감</span>
            </a>
            <a>
              <span>실시간 모임</span>
            </a>
          </div>
        </HomeWrapper>
      </header>
      <main>
        <div>글</div>
        <div>글</div>
        <div>글</div>
        <div>글</div>
        <div>글</div>
        <div>글</div>
        <div>글</div>
      </main>
    </AppLayout>
  );
};

export default Home;
