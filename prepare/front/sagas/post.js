// sagas/post.js
import { generateDuumyPost } from '../public/post/generateDuumyPost';
import { dummyPost } from '../public/post/singPost';
import { all, fork, put, call, takeLatest, delay } from 'redux-saga/effects';
import shortid from 'shortid';

import {
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILURE,
} from '../reducers/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

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

function loadPostAPI(data) {
  return axios.get(`http://localhost:3000/post/singPost.json`);
}

function* loadPost(action) {
  try {
    // const result = yield call(loadPostAPI, action.data);
    // console.log('result', result);
    yield delay(1000);
    yield put({
      type: LOAD_POST_SUCCESS,
      data: dummyPost,
    });
  } catch (err) {
    yield put({
      type: LOAD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function addPostAPI(data) {
  return axios.post(`http://localhost:3000/post/dummyPost.js`, data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    // console.log('result', result);
    const id = shortid.generate();
    yield delay(1000);
    yield put({
      type: ADD_POST_SUCCESS,
      data: {
        title: action.data.title,
        category: action.data.category,
        content: action.data.content,
      },
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: id,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function removePostAPI(data) {
  return axios.post(`http://localhost:3000/post/dummyPost.js`, data);
}

function* removePost(action) {
  try {
    // const result = yield call(removePostAPI, action.data);
    // console.log('result', result);
    yield delay(1000);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data,
    });
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: REMOVE_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLoadPosts() {
  yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}
function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}
function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

export default function* postSaga() {
  yield all([fork(watchLoadPosts), fork(watchLoadPost), fork(watchAddPost), fork(watchRemovePost)]);
}
