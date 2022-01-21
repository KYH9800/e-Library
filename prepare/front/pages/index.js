import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { END } from 'redux-saga';
import { wrapper } from '../store/configureStore';
import axios from 'axios';
import Head from 'next/head';

import { Wrapper, Introduce, BoaderBox, BoardListWrapper, ListBox } from '../style/indexSt';

import AppLayout from '../components/AppLayout';

import { LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS } from '../reducers/user';

const Home = () => {
  // const dispatch = useDispatch();

  const quotes = [
    '추천도서1',
    '추천도서2',
    '추천도서3',
    '추천도서4',
    '추천도서5',
    '추천도서6',
    '추천도서7',
    '추천도서8',
    '추천도서9',
    '추천도서10',
  ];
  const popularBooks = [
    '인기도서1',
    '인기도서2',
    '인기도서3',
    '인기도서4',
    '인기도서5',
    '인기도서6',
    '인기도서7',
    '인기도서8',
    '인기도서9',
    '인기도서10',
  ];
  const realTimeGroups = [
    '카테고리 모임1',
    '카테고리 모임2',
    '카테고리 모임3',
    '카테고리 모임4',
    '카테고리 모임5',
    '카테고리 모임6',
    '카테고리 모임7',
    '카테고리 모임8',
    '카테고리 모임9',
    '카테고리 모임10',
  ];

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_MY_INFO_REQUEST,
  //   });
  // }, []);

  return (
    <AppLayout>
      <Head>
        <title>e도서관</title>
      </Head>
      <Wrapper>
        <Introduce>
          <h1>지금 있는 곳에서 책을 읽고 사람들과 공유하세요</h1>
          <p>
            <span>e도서관</span>에 오신 여러분을 환영합니다.
          </p>
        </Introduce>
        <BoaderBox>
          <h2>"책은 내 마음 속의 언 바다를 깨는 도끼와도 같다."</h2>
          <p>프란츠 카프카(유대계의 독일인 작가)</p>
        </BoaderBox>
        <BoardListWrapper>
          <ListBox>
            <ul>
              <h1>추천 도서</h1>
              {quotes.map((quote, index) => {
                return (
                  <li key={quote}>
                    <a>
                      {index + 1}. {quote}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul>
              <h1>인기 도서</h1>
              {popularBooks.map((popularBook, index) => {
                return (
                  <li key={popularBook}>
                    <a>
                      {index + 1}. {popularBook}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul>
              <h1>최신 모임 현황</h1>
              {realTimeGroups.map((realTimeGroup, index) => {
                return (
                  <li key={realTimeGroup}>
                    <a>
                      {index + 1}. {realTimeGroup}
                    </a>
                  </li>
                );
              })}
            </ul>
          </ListBox>
        </BoardListWrapper>
      </Wrapper>
    </AppLayout>
  );
};

// getServerSideProps: 브라우저는 개입 못함, 순전히 Front Server에서 실해됨
export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res, ...ets }) => {
  console.log('getServerSideProps req.headers: ', req.headers);
  const cookie = req ? req.headers.cookie : '';
  console.log('cookie: ', cookie);
  axios.defaults.headers.Cookie = ''; // 서버에서 다른 사람과 cookie가 공유되는 문제를 방지하고자 초기화를 해준다.
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie; // 서버에서 요청일때랑 cookie가 있으면 설정한 cookie를 넣어준다.
    console.log('axios.defaults.headers.Cookie: ', axios.defaults.headers.Cookie);
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Home;

//! 1. 새로고침 시 action에 대한 요청을 END통해 기다리지를 못함, 서버에 request 요청이 안감
//? 2. cookie는 있음 1번이 문제임 request에서 success까지 기다리지를 못함

/*
getServerSideProps에 찍은 콘솔은 프론트 서버에서 뜹니다.
쿠키가 제대로 전달이 되었다면 HYDRATE 부분이 문제거나 next-redux-wrapper쪽 문제일 것 같은데요.
에러 분석은 프론트서버에서 하셔야할 것 같고요.
브라우저 콘솔 보시면 4. WrapperApp created... 이게 있는데 이게 프론트 서버 콘솔에도 찍혀있을 겁니다.
여기서 1,2,3,4단계 모두 콘솔에 찍힐텐데 중간에 state가 사라지는 지점이 있을겁니다. 그걸 보셔야 합니다.
*/
