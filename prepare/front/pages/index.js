import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Router from 'next/router';
import Link from 'next/link';
import { wrapper } from '../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';

import {
  MainWrapper,
  CreactPostBtn,
  PostWrapper,
  ListWrapper,
  UpdateBtn,
  DeleteBtn,
  Num,
  Title,
  Count,
  Id,
} from '../style/communitySt';
import AppLayout from '../components/AppLayout';

import { LOAD_POSTS_REQUEST, REMOVE_POST_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

const Community = () => {
  const dispatch = useDispatch();
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);
  const { me } = useSelector((state) => state.user);
  // console.log('LOAD_POSTS_REQUEST_MainPosts: ', mainPosts);
  const id = me?.id;

  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          const lastId = mainPosts[mainPosts.length - 1]?.id;
          dispatch({
            type: LOAD_POSTS_REQUEST,
            lastId,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, loadPostsLoading, mainPosts]);

  const onClickAddPost = useCallback(() => {
    if (me) {
      Router.push('/addPost');
    } else {
      alert('로그인 후 이용 가능합니다.'); // 안전장치
      Router.push('/login');
    }
  });

  const onRemovePost = useCallback(
    (post) => () => {
      // console.log('postId: ', post.id);
      if (confirm('게시글을 삭제 하시겠습니까? 삭제 후 게시글은 복구되지 않습니다.') == true) {
        dispatch({
          type: REMOVE_POST_REQUEST,
          data: post.id,
        });
      }
    },
    [],
  );

  const onClickUpdate = useCallback(
    (post) => () => {
      if (me) {
        Router.push(`/post/updatePost/${post}`);
      } else {
        alert('회원님의 글만 수정이 가능합니다.'); // 안전장치
      }
    },
    [],
  );

  return (
    <AppLayout>
      <Head>
        <title>e도서관 | 커뮤니티</title>
      </Head>
      <MainWrapper>
        <h1>전체게시판</h1>
        <CreactPostBtn>
          <div>
            <button onClick={onClickAddPost}>글쓰기</button>
          </div>
        </CreactPostBtn>
        <PostWrapper>
          {mainPosts.length === 0 && <h3>존재하는 게시글이 없습니다.</h3>}
          {mainPosts.map((post, index) => (
            <ListWrapper key={post.id}>
              <Link href={`post/${post.id}`}>
                <div>
                  <ul>
                    <li>
                      <Num>{index + 1}</Num>
                      <Title>
                        <span>[{post.category}]</span> <p>{post.title}</p>
                      </Title>
                      <Count>조회수: {post.count}</Count>
                      <Id>작성자: {post.User.nickname}</Id>
                    </li>
                  </ul>
                </div>
              </Link>
              {id && post.User.id === id ? (
                <>
                  <UpdateBtn onClick={onClickUpdate(post.id)}>수정</UpdateBtn>
                  <DeleteBtn onClick={onRemovePost(post)}>삭제</DeleteBtn>
                </>
              ) : null}
            </ListWrapper>
          ))}
        </PostWrapper>
      </MainWrapper>
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

export default Community;
