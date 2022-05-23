import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Link from 'next/link';
import Router from 'next/router';
import { wrapper } from '../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';

import {
  Header,
  Main,
  TitleWrapper,
  CategoryWrapper,
  BtnWrapper,
  SelectWraper,
  TextEdit,
  ImageWrapper,
} from '../style/addPostSt';
import { Select } from 'antd';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';

import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

import { backURL } from '../config/config';

const AddPost = () => {
  const dispatch = useDispatch();
  const { me, addPostError } = useSelector((state) => state.user);
  const { imagePaths } = useSelector((state) => state.post);
  // console.log('imagePaths', imagePaths);

  const [title, onChangeTitle] = useInput('');
  const [category, setCategory] = useState();
  const [content, setContent] = useState('');

  // onSubmit
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
      if (confirm('게시글을 생성하시겠습니까?') == true) {
        const formData = new FormData();
        imagePaths.forEach((p) => {
          formData.append('image', p);
        });
        formData.append('title', title);
        formData.append('category', category);
        formData.append('content', content);
        dispatch({
          type: ADD_POST_REQUEST,
          data: formData,
        });
        // error 없으면 community 목록으로 이동
        if (!addPostError) {
          Router.push('/community');
        }
      }
    },
    [title, category, content],
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

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    console.log('images', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  }, []);

  const onRemoveImage = useCallback(
    (index) => () => {
      if (confirm('정말 삭제하시겠습니까??') == true) {
        console.log(index);
        dispatch({
          type: REMOVE_IMAGE,
          data: index,
        });
      }
    },
    [],
  );

  const handleInput = (e) => {
    setContent(e.target.innerText);
  };

  return (
    <AppLayout>
      <Main>
        <Header>
          <h1>글쓰기</h1>
        </Header>
        <form onSubmit={onSubmit}>
          <CategoryWrapper>
            <TitleWrapper>
              <label htmlFor="title">글 제목</label>
              <input type="text" value={title} onChange={onChangeTitle} placeholder="글의 제목을 작성해주세요" />
            </TitleWrapper>
            <SelectWraper defaultValue="카테고리" onChange={handleChange}>
              <Select.Option value="자유게시글">자유게시글</Select.Option>
              <Select.Option value="모임공지">모임공지</Select.Option>
              <Select.Option value="독후감">독후감</Select.Option>
              <Select.Option value="건의게시글">건의게시글</Select.Option>
            </SelectWraper>
          </CategoryWrapper>
          <br />
          <TextEdit>
            <div className="editor-menu">
              <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
              <button type="button" onClick={onClickImageUpload}>
                이미지 삽입
              </button>
            </div>
            <ImageWrapper>
              <div
                id="editor"
                contentEditable
                suppressContentEditableWarning
                spellCheck={false}
                value={`${me?.nickname}님의 게시글을 작성해주세요`}
                onInput={handleInput}
              ></div>
            </ImageWrapper>
            <br />
            {imagePaths.map((v, i) => (
              <div className="text_photo" key={i} style={{ display: 'inline-block' }} onClick={onRemoveImage(i)}>
                <p id="explain">삭제</p>
                <img src={`${backURL}/${v}`} style={{ width: '120px' }} alt={v} />
              </div>
            ))}
          </TextEdit>
          <BtnWrapper>
            <button type="submit">완료</button>
            <button
              type="button"
              onClick={() => {
                if (confirm('작성 중인 게시글은 저장되지 않습니다. 작성을 취소하시겠습니까?') == true) {
                  Router.push('/community');
                }
              }}
            >
              취소
            </button>
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
