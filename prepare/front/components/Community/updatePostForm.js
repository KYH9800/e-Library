import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { wrapper } from '../../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';

import { AddPostWrapper } from '../../style/addPostSt';

import useInput from '../../hooks/useInput';
import { backURL } from '../../config/config';

import { UPDATE_POST_REQUEST } from '../../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';

const UpdatePostForm = ({ post }) => {
  const dispatch = useDispatch();
  const { me, updatePostError } = useSelector((state) => state.user);

  const [category, setCategory] = useState(post.category || '');
  const [title, onChangeTitle] = useInput(post.title || '');
  const [content, onChangeContent] = useInput(post.content || '');
  console.log(title, category, post.id);

  useEffect(() => {
    if (!me) {
      Router.push('/community');
    }
  }, [me]);

  const handleChange = useCallback(
    (e) => {
      setCategory(e.target.value);
    },
    [category],
  );

  const onClickCancle = useCallback(() => {
    if (confirm('취소 시 수정된 게시글은 복구되지 않습니다.\n취소하고 목록으로 이동 하시겠습니까?') === true) {
      Router.push('/community');
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
          content: content,
        }, //! error 발생: update 시 보낼 data를 formData.append로 묶어주기
      });
      if (!updatePostError) {
        Router.push('/community');
      }
    }
  });

  return (
    <>
      <AddPostWrapper>
        <h1>{post.User.nickname}님의 글을 수정해주세요.</h1>
        <form onSubmit={onSubmit}>
          <div id="title-wrapper">
            <label id="title-label" htmlFor="title">
              글 제목
            </label>
            <input
              id="title-input"
              type="text"
              value={title}
              onChange={onChangeTitle}
              placeholder="글의 제목을 작성해주세요"
            />
            <select id="select-list" name="category" onChange={handleChange}>
              <option value="카테고리">{post.category}</option>
              <option value="자유게시글">자유게시글</option>
              <option value="모임공지">모임공지</option>
              <option value="독후감">독후감</option>
              <option value="건의게시글">건의게시글</option>
            </select>
          </div>
          <div id="img-textarea-wrapper">
            <div id="textarea-wrapper">
              <textarea value={content} onChange={onChangeContent} placeholder="내용을 입력해 주세요." />
            </div>
            <div id="img-list-wrapper">
              {post.Images.length !== 0 ? null : (
                <div>
                  <div id="update-post-img">해당 게시글은 업로드된 사진이 없습니다.</div>
                </div>
              )}
              {post.Images.map((v, i) => {
                return (
                  <div id="imgWrapper">
                    <img src={`${backURL}/${v.src}`} alt={v} />
                  </div>
                );
              })}
            </div>
          </div>
          <div id="btn-wrapper">
            <button id="upload-btn" type="submit">
              완료
            </button>
            <button id="cancel-btn" type="button" onClick={onClickCancle}>
              취소
            </button>
          </div>
        </form>
      </AddPostWrapper>
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
