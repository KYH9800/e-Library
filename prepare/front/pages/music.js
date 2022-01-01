import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';

const Music = () => {
  return (
    <AppLayout>
      <Head>
        <title>K-Style | Music</title>
      </Head>
      <div>음악 페이지</div>
    </AppLayout>
  );
};

export default Music;
