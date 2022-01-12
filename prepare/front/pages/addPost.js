import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';

import {
  Header,
  Main,
  TitleWrapper,
  KategoryWrapper,
  ContentWrapper,
  BtnWrapper,
  SelectWraper,
} from '../style/addPostSt';
import { Select } from 'antd';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';

import { addPost } from '../reducers/post';

const AddPost = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { addPostDone } = useSelector((state) => state.post);
  const imageInput = useRef(); // 실제 DOM에 접근하기 위해 사용

  const [title, onChangeTitle] = useInput('');
  const [kategory, setKategory] = useState();
  const [content, onChangeContent] = useInput('');

  const handleChange = useCallback(
    (value) => {
      setKategory(value);
    },
    [kategory],
  );

  useEffect(() => {
    if (!me) {
      Router.push('/community');
      console.log('me in addPostPage: ', me);
    }
  });

  const onClickImageUpload = useCallback(
    (e) => {
      imageInput.current.click();
      console.log(e);
    },
    [imageInput.current],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!title) {
        alert('제목을 입력하세요');
      } else if (!kategory) {
        alert('카테고리를 설정하세요');
      } else if (!content) {
        alert('게시글을 작성하세요');
      } else {
        dispatch(
          addPost({
            title,
            kategory,
            content,
          }),
        );
        Router.push('/community');
      }
    },
    [title, kategory, content],
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
          <KategoryWrapper>
            <SelectWraper defaultValue="카테고리" onChange={handleChange}>
              <Select.Option value="자유게시글">자유게시글</Select.Option>
              <Select.Option value="모임공지">모임공지</Select.Option>
              <Select.Option value="독후감">독후감</Select.Option>
              <Select.Option value="건의게시글">건의게시글</Select.Option>
            </SelectWraper>
          </KategoryWrapper>
          <ContentWrapper>
            <label htmlFor="content">내용 작성</label>
            <br />
            <textarea
              placeholder={`${me?.nickname}님의 게시글을 작성해주세요`}
              value={content}
              onChange={onChangeContent}
            ></textarea>
          </ContentWrapper>
          <BtnWrapper>
            <Link href="/community">
              <button>돌아가기</button>
            </Link>
            <input type="file" multiple hidden ref={imageInput} />
            <button onClick={onClickImageUpload}>이미지 업로드</button>
            <button type="submit">완료</button>
          </BtnWrapper>
        </form>
      </Main>
    </AppLayout>
  );
};

export default AddPost;
