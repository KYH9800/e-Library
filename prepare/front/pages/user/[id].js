import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import { wrapper } from '../../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';

import {
  MainWrapper,
  CreactPostBtn,
  ListWrapper,
  UpdateBtn,
  DeleteBtn,
  ContentListTable,
  ListLink,
  List,
} from '../../style/communitySt';
import AppLayout from '../../components/AppLayout';

import { LOAD_USER_POSTS_REQUEST, REMOVE_POST_REQUEST } from '../../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';

const User = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);
  const { me } = useSelector((state) => state.user);
  const userId = me?.id;
  console.log('LOAD_USER_POSTS_REQUEST: ', mainPosts);
  console.log('페이지에서 받아온 user id: ', id);

  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          // const lastId = mainPosts[mainPosts.length - 1]?.id;
          dispatch({
            type: LOAD_USER_POSTS_REQUEST,
            lastId: mainPosts[mainPosts.length - 1] && mainPosts[mainPosts.length - 1].id,
            data: id,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, loadPostsLoading, mainPosts]);

  useEffect(() => {
    if (!me) {
      alert('로그인 후 이용해주세요');
      Router.push('/community');
    }
  });

  const onClickAddPost = () => {
    if (me) {
      Router.push('/addPost');
    } else {
      alert('로그인 후 이용 가능합니다.'); // 안전장치
      Router.push('/login');
    }
  };

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
        <h1>{me?.nickname}님의 게시글</h1>
        <div id="create-btn-wrapper">
          <button id="create-btn" onClick={onClickAddPost}>
            글쓰기
          </button>
        </div>
        {mainPosts.length === 0 ? (
          <div id="none-post">게시글이 존재하지 않습니다.</div>
        ) : (
          <table id="table-wrapper">
            <thead>
              <th>순번</th>
              <th>카테고리</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </thead>
            {mainPosts.map((post, index) => (
              <tbody key={post.id}>
                <tr id="post-list">
                  <Link href={`/post/${post.id}`}>
                    <td id="num">{index + 1}</td>
                  </Link>
                  <Link href={`/post/${post.id}`}>
                    <td id="category">[{post.category}]</td>
                  </Link>
                  <Link href={`/post/${post.id}`}>
                    <td id="title">
                      <a>{post.title.length > 35 ? post.title.substr(0, 35) + ' ...' : post.title}</a>
                    </td>
                  </Link>
                  <Link href={`/post/${post.id}`}>
                    <td id="nickname">{post.User.nickname}</td>
                  </Link>
                  <td id="date">
                    {post.createdAt.substr(0, 10)} 작성
                    <div id="option-btn-wrapper">
                      {id && post.User.id === id ? (
                        <div id="option-btn">
                          <button type="button" onClick={onClickUpdate(post.id)}>
                            수정
                          </button>
                          <button type="button" onClick={onRemovePost(post)}>
                            삭제
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        )}
      </MainWrapper>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, params }) => {
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
    type: LOAD_USER_POSTS_REQUEST,
    data: params.id,
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default User;
