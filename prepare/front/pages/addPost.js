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

import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

//* quill text editor
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

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
  const { me, addPostError, imagePaths } = useSelector((state) => state.user);
  console.log('imagePaths', imagePaths);

  const [title, onChangeTitle] = useInput('');
  const [category, setCategory] = useState();
  const [content, setContent] = useState('');

  const quillRef = useRef();

  //* quill text editor
  const imageHandler = (e) => {
    console.log('에디터의 이미지 버튼을 클릭하면 이 핸들러가 시작됩니다.'); // true
    const input = document.createElement('input'); // 1. 이미지를 저장할 input type=file DOM을 만든다.
    // 속성 써주기
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click(); // 에디터 이미지버튼을 클릭하면 이 input이 클릭된다. input이 클릭되면 파일 선택창이 나타난다.

    input.addEventListener('change', async () => {
      console.log('onChange');
      const file = input.files[0];
      const imageFormData = new FormData(); // multer에 맞는 형식으로 데이터 만들어준다.
      [].forEach.call(file, (f) => {
        imageFormData.append('image', f); // formData는 키-밸류 구조
      });
      dispatch({
        type: UPLOAD_IMAGES_REQUEST,
        data: imageFormData,
      });
    });
  };

  //* quill text editor
  // useMemo를 사용한 이유는 modules가 렌더링마다 변하면 에디터에서 입력이 끊기는 버그가 발생
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          ['link', 'image'],
          ['clean'],
        ],
        handlers: { image: imageHandler },
      },
    }),
    [],
  );

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
      const formData = new FormData();
      imagePaths.forEach((p) => {
        formData.append('image', p);
      });
      formData.append({ title: title, category: category, content: content });
      // dispatch loadPostRequest
      dispatch({
        type: ADD_POST_REQUEST,
        data: formData,
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
              ref={quillRef}
              modules={modules}
              formats={formats}
              theme="snow"
              placeholder={`${me?.nickname}님의 글을 입력해주세요`}
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
