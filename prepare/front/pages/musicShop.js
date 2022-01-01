import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';

const MusicShop = () => {
  return (
    <AppLayout>
      <Head>
        <title>K-Style | MusicShop</title>
      </Head>
      <div>음악 기기 판매 페이지</div>
    </AppLayout>
  );
};

export default MusicShop;
