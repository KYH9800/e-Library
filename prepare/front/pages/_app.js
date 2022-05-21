import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { wrapper } from '../store/configureStore';

const ELibrary = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>e도서관</title>
    </Head>
    <Component {...pageProps} />
  </>
);

ELibrary.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default wrapper.withRedux(ELibrary);
