// sagas/post.js
import { all, fork, put, call, takeLatest, delay } from 'redux-saga/effects';

import { LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, generateDuumyPost } from '../reducers/post';

function loadPostsAPI(data) {
  return axios.get('http://localhost:3000/post/post.json', data);
}

function* loadPosts(action) {
  try {
    // const result = yield call(loadPostsAPI, action.data);
    // console.log(result);
    yield delay(1000);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: generateDuumyPost(10),
    });
  } catch (err) {
    yield put({
      type: LOAD_POSTS_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLoadPost() {
  yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}

export default function* postSaga() {
  yield all([fork(watchLoadPost)]);
}
