import React, { useCallback, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { wrapper } from '../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';

import AppLayout from '../components/AppLayout';

import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { LOAD_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
  return (
    <AppLayout>
      <Head>
        <title>e도서관 | 커뮤니티</title>
      </Head>
      테스트 페이지
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  // console.log('getServerSideProps req: ', req);
  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch({
    type: LOAD_POSTS_REQUEST,
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Home;
