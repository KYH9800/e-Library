import React from 'react';
import Head from 'next/head';

import { Emptyplace } from '../components/style/AppLayoutSt';

import AppLayout from '../components/AppLayout';

const Books = () => {
  return (
    <AppLayout>
      <Head>
        <title>e도서관 | 책추천</title>
      </Head>
      <Emptyplace />
      <div>책정보 페이지</div>
      <div>책정보 페이지</div>
      <div>책정보 페이지</div>
      <div>책정보 페이지</div>
      <div>책정보 페이지</div>
    </AppLayout>
  );
};

export default Books;
