import React from 'react';
import Head from 'next/head';

import { Emptyplace } from '../components/style/AppLayoutSt';

import AppLayout from '../components/AppLayout';

const BookClass = () => {
  return (
    <AppLayout>
      <Head>
        <title>e도서관 | 모임</title>
      </Head>
      <Emptyplace />
      <div>모임 페이지</div>
      <div>모임 페이지</div>
      <div>모임 페이지</div>
      <div>모임 페이지</div>
      <div>모임 페이지</div>
      <div>모임 페이지</div>
      <div>모임 페이지</div>
    </AppLayout>
  );
};

export default BookClass;
