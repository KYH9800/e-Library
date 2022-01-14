import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { MainWrapper } from '../../style/communitySt';

import AppLayout from '../../components/AppLayout';
import PostForm from '../../components/Community/postForm'; // props 넘겨주기

import { LOAD_POST_REQUEST } from '../../reducers/post';

//* 여기서 dispatch LOAD_POST 시, post.id의 게시글을 불러오면 된다. (SSR, getServerSideProps)

const Post = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  console.log('다이나믹 라우팅 id: ', id);

  const { singlePost } = useSelector((state) => state.post);

  // useEffect로 단일 게시글 하나 불러오기
  useEffect(() => {
    dispatch({
      type: LOAD_POST_REQUEST,
      data: id,
    });
  }, []);

  return (
    <AppLayout>
      <Head>
        <title>e도서관 | 커뮤니티</title>
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

export default Post;
