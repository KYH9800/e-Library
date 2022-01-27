import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import { wrapper } from '../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';

//* for quill text editor
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

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

import { ADD_POST_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

//* quill text editor
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];

//* AddPost
const AddPost = () => {
  const dispatch = useDispatch();
  const { me, addPostError } = useSelector((state) => state.user);

  const [title, onChangeTitle] = useInput('');
  const [category, setCategory] = useState();
  const [content, setContent] = useState('');

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
      if (!title) {
        return alert('제목을 입력하세요');
      } else if (!category) {
        return alert('카테고리를 설정하세요');
      } else if (!content) {
        return alert('게시글을 작성하세요');
      }
      // dispatch loadPostRequest
      dispatch({
        type: ADD_POST_REQUEST,
        data: { title, category, content },
      });
      // error 없으면 community 목록으로 이동
      if (!addPostError) {
        Router.push('/community');
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
            <QuillNoSSRWrapper
              modules={modules}
              formats={formats}
              theme="snow"
              placeholder={`${me.nickname}님의 글을 입력해주세요`}
              value={content}
              onChange={setContent}
            />
          </ContentWrapper>
          <BtnWrapper>
            <Link href="/community">
              <button>취소</button>
            </Link>
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

/*
<label htmlFor="content">내용 작성</label>
<br />
<textarea
  placeholder={`${me?.nickname}님의 게시글을 작성해주세요`}
  value={content}
  onChange={onChangeContent}
></textarea>
*/
