import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { wrapper } from '../../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';

import {
  TextWrapper,
  ButtonWrapper,
  Category,
  Title,
  UserNickname,
  Content,
  ImageWrapper,
  CommentMap,
} from '../style/postFormSt';
import PostImages from './postImage';

import { LOAD_POSTS_REQUEST, LOAD_POST_REQUEST } from '../../reducers/post';

import CommentForm from './comment';

const PostForm = ({ post }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  console.log('mainPosts: ', mainPosts);
  console.log('PostForm의 넘겨받은 Props: ', post);

  return (
    <>
      <TextWrapper>
        <Category>[{post.category}]</Category>
        <Title>{post.title}</Title>
        <UserNickname>
          작성자: <span>{post.User.nickname}</span> 님
        </UserNickname>
        <ImageWrapper>{post.Images[0] && <PostImages images={post.Images} />}</ImageWrapper>
        <Content>
          {post.content.split('\n').map((line, i) => {
            //this.props.data.content: 내용
            return (
              <span key={i}>
                {line}
                <br />
              </span>
            );
          })}
        </Content>
        <ButtonWrapper>
          <Link href="/community">
            <button>목록으로</button>
          </Link>
        </ButtonWrapper>
        {me ? <CommentForm post={post} /> : null}
        <CommentMap>
          <span>
            {post.Comments.map((v) => {
              return (
                <div>
                  <a>{v.UserId}</a>
                  <p>{v.content}</p>
                </div>
              );
            })}
          </span>
        </CommentMap>
      </TextWrapper>
    </>
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
  store.dispatch({
    type: LOAD_POST_REQUEST,
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default PostForm;
