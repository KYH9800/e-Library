// sagas/post.js
import { generateDuumyPost } from '../public/post/generateDuumyPost';
import shortid from 'shortid';
import { all, fork, put, call, takeLatest, delay } from 'redux-saga/effects';

import {
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
} from '../reducers/post';

function loadPostsAPI(data) {
  return axios.get(`http://localhost:3000/posts`, data);
}

function* loadPosts(action) {
  try {
    // const result = yield call(loadPostsAPI, action.data);
    // console.log('result', result);
    yield delay(1000);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_POSTS_FAILURE,
      data: err.response.data,
    });
  }
}

function addPostAPI(data) {
  return axios.get(`http://localhost:3000/posts`, data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    // console.log('result', result);
    yield delay(1000);
    yield put({
      type: ADD_POST_SUCCESS,
      data: {
        id: shortid.generate(),
        title: action.data.title,
        category: action.data.category,
        content: action.data.content,
      },
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLoadPost() {
  yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}
function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

export default function* postSaga() {
  yield all([fork(watchLoadPost), fork(watchAddPost)]);
}
