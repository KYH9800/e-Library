import React from 'react';
import Head from 'next/head';

import { MainWrapper } from '../style/musicSt';

import AppLayout from '../components/AppLayout';
import { GlobalStyle } from '../components/style/AppLayoutSt';

const Music = () => {
  return (
    <AppLayout>
      <Head>
        <title>K-Style | Music</title>
      </Head>
      <MainWrapper>
        <div />
        <div>음악 페이지</div>
        <div>밑글을 적어주세요</div>
      </MainWrapper>
    </AppLayout>
  );
};

export default Music;
