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

  const onClickMyPost = useCallback((postId) => () => {
    Router.push(`/post/${postId}`);
  });

  return (
    <AppLayout>
      <Head>
        <title>e도서관 | 커뮤니티</title>
      </Head>
      <MainWrapper>
        <h1>{me.nickname}님의 게시글</h1>
        <CreactPostBtn>
          <div>
            <button onClick={onClickAddPost}>글쓰기</button>
          </div>
        </CreactPostBtn>
        {mainPosts.length === 0 && <h3>존재하는 게시글이 없습니다.</h3>}
        <ListWrapper>
          {mainPosts.length === 0 ? (
            <List>
              <h1>존재하는 게시글이 없습니다.</h1>
            </List>
          ) : (
            <>
              <ContentListTable>
                <div className="num">순번</div>
                <div className="category">카테고리</div>
                <div className="subject">제목</div>
                <div className="user">작성자</div>
              </ContentListTable>
              {mainPosts.map((post, index) => {
                console.log('이거 이서 이서: ', post.id);
                return (
                  <>
                    <List onClick={onClickMyPost(post.id)}>
                      <div className="menuListWrapper">
                        <ListLink>
                          <div className="num">{index + 1}</div>
                          <div className="category">[{post.category}]</div>{' '}
                          <div className="subject">
                            {post.title.length > 10 ? post.title.substr(0, 10) + ' ...' : post.title}
                          </div>
                          <div className="user">{post.User.nickname}</div>
                          {id && post.User.id === id ? (
                            <>
                              <UpdateBtn type="button" onClick={onClickUpdate(post.id)}>
                                수정
                              </UpdateBtn>
                              <DeleteBtn type="button" onClick={onRemovePost(post)}>
                                삭제
                              </DeleteBtn>
                            </>
                          ) : null}
                        </ListLink>
                      </div>
                    </List>
                  </>
                );
              })}
            </>
          )}
        </ListWrapper>
      </MainWrapper>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, params }) => {
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
