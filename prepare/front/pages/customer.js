import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';

const Customer = () => {
  return (
    <AppLayout>
      <Head>
        <title>K-Style | Customer</title>
      </Head>
      <div>고객문의 페이지</div>
    </AppLayout>
  );
};

export default Customer;
