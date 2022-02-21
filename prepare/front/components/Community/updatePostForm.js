import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { wrapper } from '../../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';

import {
  Main,
  TitleWrapper,
  CategoryWrapper,
  ContentWrapper,
  BtnWrapper,
  SelectWraper,
} from '../../style/updatePostSt';
import { Select } from 'antd';

import useInput from '../../hooks/useInput';
import PostImages from './postImage';

import { UPDATE_POST_REQUEST } from '../../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';

const UpdatePostForm = ({ post }) => {
  const dispatch = useDispatch();
  const { me, updatePostError } = useSelector((state) => state.user);

  const imageInput = useRef(); // 실제 DOM에 접근하기 위해 사용

  const [title, onChangeTitle] = useInput('');
  const [category, setCategory] = useState();
  const [changeContent, onChangeContent] = useInput('');
  // console.log(title, category, changeContent, post.id);

  useEffect(() => {
    if (!me) {
      Router.push('/');
    }
  }, [me]);

  const handleChange = useCallback(
    (value) => {
      setCategory(value);
    },
    [category],
  );

  const onClickCancle = useCallback(() => {
    if (confirm('취소 시 수정된 게시글은 복구되지 않습니다.\n취소하고 목록으로 이동 하시겠습니까?') === true) {
      Router.push('/');
    }
  });

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    // console.log(title, category, content);
    if (confirm('게시글을 수정하시겠습니까?') === true) {
      dispatch({
        type: UPDATE_POST_REQUEST,
        data: {
          PostId: post.id,
          title: title,
          category: category,
          content: changeContent,
        }, //! error 발생: update 시 보낼 data를 formData.append로 묶어주기
      });
      if (!updatePostError) {
        Router.push('/community');
      }
    }
  });

  return (
    <>
      <Main>
        <h2>{post.User.nickname}님의 글을 수정해주세요</h2>
        <form onSubmit={onSubmit}>
          <TitleWrapper>
            <label htmlFor="title">제목 수정</label>
            <input
              type="text"
              defaultValue={post.title}
              value={title}
              onChange={onChangeTitle}
              placeholder={`${post.title}`}
            />
          </TitleWrapper>
          <CategoryWrapper>
            <SelectWraper defaultValue={post.category} onChange={handleChange}>
              <Select.Option value="자유게시글">자유게시글</Select.Option>
              <Select.Option value="모임공지">모임공지</Select.Option>
              <Select.Option value="독후감">독후감</Select.Option>
              <Select.Option value="건의게시글">건의게시글</Select.Option>
            </SelectWraper>
          </CategoryWrapper>

          <ContentWrapper>
            <>{post.Images[0] && <PostImages images={post.Images} />}</>
            <textarea
              type="text"
              defaultValue={post.content}
              placeholder={post.content}
              value={changeContent}
              onChange={onChangeContent}
            />
          </ContentWrapper>

          <BtnWrapper>
            <button type="button" onClick={onClickCancle}>
              취소
            </button>
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
  store.dispatch({
    type: LOAD_POSTS_REQUEST,
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default UpdatePostForm;
