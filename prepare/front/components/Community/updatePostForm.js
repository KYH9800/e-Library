import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import { wrapper } from '../../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';

import {
  Header,
  Main,
  TitleWrapper,
  CategoryWrapper,
  ContentWrapper,
  BtnWrapper,
  SelectWraper,
} from '../../style/updatePostSt';
import { ImageWrapper, TextWrapper } from '../style/postFormSt';
import { Select } from 'antd';

import useInput from '../../hooks/useInput';
import PostImages from './postImage';

import { UPDATE_POST_REQUEST } from '../../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';

const UpdatePostForm = ({ post }) => {
  const dispatch = useDispatch();
  const { me, addPostError } = useSelector((state) => state.user);

  const imageInput = useRef(); // 실제 DOM에 접근하기 위해 사용

  const [title, onChangeTitle] = useInput('');
  const [category, setCategory] = useState();
  const [content, onChangeContent] = useInput('');
  console.log('content: ', content);

  useEffect(() => {
    if (!me) {
      Router.push('/community');
    }
  }, [me]);

  const handleChange = useCallback(
    (value) => {
      setCategory(value);
    },
    [category],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // console.log(title, category, content);
      if (!category) {
        return alert('카테고리를 설정하세요');
      }
      const formData = new FormData();
      formData.append('title', title);
      formData.append('category', category);
      formData.append('content', content);
      dispatch({
        type: UPDATE_POST_REQUEST,
        data: {
          PostId: post.id,
          formData,
        }, //! error 발생: update 시 보낼 data를 formData.append로 묶어주기
      });
      if (!addPostError) {
        Router.push('/community');
      }
    },
    [title, category, content],
  );

  return (
    <>
      <Main>
        <h2>{post.User.nickname}님의 글을 수정해주세요</h2>
        <form onSubmit={onSubmit}>
          <TitleWrapper>
            <label htmlFor="title">제목 수정</label>
            <input type="text" value={title} onChange={onChangeTitle} placeholder={`${post.title}`} />
          </TitleWrapper>
          <CategoryWrapper>
            <SelectWraper defaultValue="카테고리" onChange={handleChange}>
              <Select.Option value="자유게시글">자유게시글</Select.Option>
              <Select.Option value="모임공지">모임공지</Select.Option>
              <Select.Option value="독후감">독후감</Select.Option>
              <Select.Option value="건의게시글">건의게시글</Select.Option>
            </SelectWraper>
          </CategoryWrapper>
          <ContentWrapper>
            {/* <label htmlFor="content">내용 수정하기</label> */}
            <br />
            <TextWrapper>
              <ImageWrapper>{post.Images[0] && <PostImages images={post.Images} />}</ImageWrapper>
              <p>
                <textarea type="text" placeholder={post.content} value={content} onChange={onChangeContent} />
              </p>
            </TextWrapper>
          </ContentWrapper>
          <BtnWrapper>
            <Link href="/community">
              <button>취소</button>
            </Link>
            <input type="file" multiple hidden ref={imageInput} />
            <button type="submit">수정하기</button>
          </BtnWrapper>
        </form>
      </Main>
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
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default UpdatePostForm;
