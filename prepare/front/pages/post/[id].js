import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { END } from 'redux-saga';
import { wrapper } from '../../store/configureStore';
import axios from 'axios';

import { MainWrapper } from '../../style/communitySt';

import AppLayout from '../../components/AppLayout';
import PostForm from '../../components/Community/postForm'; // props 넘겨주기

import { LOAD_POST_REQUEST } from '../../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';

//* 여기서 dispatch LOAD_POST 시, post.id의 게시글을 불러오면 된다. (SSR, getServerSideProps)

const Post = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { singlePost } = useSelector((state) => state.post);
  // console.log(singlePost);

  return (
    <AppLayout>
      <Head>
        <title>
          {singlePost?.User.nickname}
          님의 글
        </title>
      </Head>
      {singlePost ? (
        <MainWrapper>
          <h1>커뮤니티</h1>
          <PostForm post={singlePost} />
        </MainWrapper>
      ) : (
        <MainWrapper>
          <h1>커뮤니티</h1>
          <p>로딩중...</p>
        </MainWrapper>
      )}
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, params }) => {
  console.log('store: ', req);
  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = ''; // 서버에서 다른 사람과 cookie가 공유되는 문제를 방지하고자 초기화를 해준다.
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie; // 서버에서 요청일때랑 cookie가 있으면 설정한 cookie를 넣어준다.
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch({
    type: LOAD_POST_REQUEST,
    data: params.id,
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Post;
