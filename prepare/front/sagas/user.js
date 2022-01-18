// sagas/user.js
import { all, fork, put, call, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOAD_MY_INFO_FAILURE,
} from '../reducers/user';

function loginAPI(data) {
  return axios.post('user/login', data);
}

function* login(action) {
  try {
    // api 통신할때는 call
    const result = yield call(loginAPI, action.data);
    console.log('user-saga-login-result: ', result);
    // yield delay(1000);
    yield put({
      type: LOGIN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOGIN_FAILURE,
      error: err.response.data,
    });
  }
}

function loadMyInfoAPI() {
  return axios.get('/user');
}

function* loadMyInfo(action) {
  try {
    // api 통신할때는 call
    const result = yield call(loadMyInfoAPI, action.data);
    // yield delay(1000);
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

function logoutAPI() {
  return axios.post('user/logout');
}

function* logout(action) {
  try {
    // api 통신할때는 call
    const result = yield call(logoutAPI);
    console.log(result);
    // yield delay(1000);
    // 아래와 같이 api 결과를 핸들링하여 dispatch 가능
    yield put({
      type: LOGOUT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOGOUT_FAILURE,
      error: err.response.data,
    });
  }
}

function signupAPI(data) {
  return axios.post('/user', data);
}

function* signup(action) {
  try {
    const result = yield call(signupAPI, action.data);
    console.log('signup: ', result);
    // yield delay(1000);
    yield put({
      type: SIGNUP_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGNUP_FAILURE,
      error: err.response.data,
    }); // 400, 500
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}
function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}
function* watchLogout() {
  yield takeLatest(LOGOUT_REQUEST, logout);
}
function* watchSignUp() {
  yield takeLatest(SIGNUP_REQUEST, signup);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLoadMyInfo), fork(watchLogout), fork(watchSignUp)]);
}
