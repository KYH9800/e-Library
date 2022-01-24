import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import { wrapper } from '../store/configureStore';
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
} from '../style/addPostSt';
import { Select } from 'antd';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';

import { addPost } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

const AddPost = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const imageInput = useRef(); // 실제 DOM에 접근하기 위해 사용

  const [title, onChangeTitle] = useInput('');
  const [category, setCategory] = useState();
  const [content, onChangeContent] = useInput('');

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

  // const onClickImageUpload = useCallback(
  //   (e) => {
  //     imageInput.current.click();
  //     console.log(e);
  //   },
  //   [imageInput.current],
  // );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!title) {
        alert('제목을 입력하세요');
      } else if (!category) {
        alert('카테고리를 설정하세요');
      } else if (!content) {
        alert('게시글을 작성하세요');
      } else {
        dispatch(
          addPost({
            title,
            category,
            content,
          }),
        ); //* reducer에서 data를 넘긴 뒤 database에 게시글 정보를 넣어준다
        Router.push('/community'); //* addPost가 성공 시 cummunity 페이지로 이동하기
      }
    },
    [title, category, content],
  );

  return (
    <AppLayout>
      <Header>
        <h1>글쓰기</h1>
      </Header>
      <Main>
        <form onSubmit={onSubmit}>
          <TitleWrapper>
            <label htmlFor="title">글 제목</label>
            <input type="text" value={title} onChange={onChangeTitle} placeholder="글의 제목을 작성해주세요" />
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
            <label htmlFor="content">내용 작성</label>
            <br />
            {/* CKeditor */}
            <textarea
              placeholder={`${me?.nickname}님의 게시글을 작성해주세요`}
              value={content}
              onChange={onChangeContent}
            ></textarea>
          </ContentWrapper>
          <BtnWrapper>
            <Link href="/community">
              <button>취소</button>
            </Link>
            <input type="file" multiple hidden ref={imageInput} />
            {/* <button onClick={onClickImageUpload}>이미지 업로드</button> */}
            <button type="submit">완료</button>
          </BtnWrapper>
        </form>
      </Main>
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
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default AddPost;
