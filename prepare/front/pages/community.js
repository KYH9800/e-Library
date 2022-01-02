import React from 'react';
import Head from 'next/head';

import { Emptyplace } from '../components/style/AppLayoutSt';

import AppLayout from '../components/AppLayout';

const Community = () => {
  return (
    <AppLayout>
      <Head>
        <title>e도서관 | 독후감</title>
      </Head>
      <Emptyplace />
      <div>독후감 페이지</div>
      <div>독후감 페이지</div>
      <div>독후감 페이지</div>
      <div>독후감 페이지</div>
      <div>독후감 페이지</div>
    </AppLayout>
  );
};

export default Community;
