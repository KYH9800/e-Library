import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { wrapper } from '../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';
// CSS
import { AddPostWrapper } from '../style/addPostSt';
import { DeleteOutlined } from '@ant-design/icons';
// custom hooks
import useInput from '../hooks/useInput';
// components
import AppLayout from '../components/AppLayout';
import { backURL } from '../config/config';
// CKEditor
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// reducer
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

const AddPost = () => {
  const dispatch = useDispatch();
  // useSelector
  const { me, addPostError } = useSelector((state) => state.user);
  const { imagePaths } = useSelector((state) => state.post);
  // useInput, useState
  const [category, setCategory] = useState();
  const [title, onChangeTitle] = useInput('');
  const [content, onChangeContent] = useInput('');

  // useEffect
  useEffect(() => {
    if (!me) {
      Router.push('/community');
    }
  }, [me]);

  // 카테고리 변경
  const handleChange = useCallback(
    (e) => {
      setCategory(e.target.value);
    },
    [category],
  );

  // 이미지 클릭 useRef()
  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  // 이미지 업로드
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

  // 이미지 삭제
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

  // 취소 버튼
  const cancelAddPost = useCallback(() => {
    if (confirm('작성 중인 게시글은 저장되지 않습니다. 작성을 취소하시겠습니까?') == true) {
      Router.push('/community');
    }
  }, []);

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

  return (
    <AppLayout>
      <AddPostWrapper>
        <h1>글쓰기</h1>
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
              <option value="카테고리">카테고리</option>
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
              {imagePaths.length !== 0 ? null : (
                <div>
                  <div className="editor-menu">
                    <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
                    <button id="add-img-btn" type="button" onClick={onClickImageUpload}>
                      (+) 클릭하여 이미지를 추가해주세요.
                    </button>
                  </div>
                </div>
              )}
              {imagePaths.map((v, i) => {
                return (
                  <div id="imgWrapper" key={i} onClick={onRemoveImage(i)}>
                    <div id="hover">
                      <DeleteOutlined id="icon" />
                    </div>
                    <img src={`${backURL}/${v}`} alt={v} />
                  </div>
                );
              })}
            </div>
          </div>
          <div id="btn-wrapper">
            <button id="upload-btn" type="submit">
              완료
            </button>
            <button id="cancel-btn" type="button" onClick={cancelAddPost}>
              취소
            </button>
          </div>
        </form>
      </AddPostWrapper>
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

{
  /* <div id="editor" contentEditable suppressContentEditableWarning spellCheck={false}></div> */
}
