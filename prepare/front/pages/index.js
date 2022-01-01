import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';

const Home = () => {
  return (
    <AppLayout>
      <Head>
        <title>K-Style</title>
      </Head>
      <div>메인 홈</div>
    </AppLayout>
  );
};

export default Home;
