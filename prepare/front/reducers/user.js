import { dummyUser } from '../public/user/user';
import produce from 'immer';
// 초기 state
export const initialState = {
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  loginLoading: false,
  loginDone: false,
  loginError: null,
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  logoutLoading: false,
  logoutDone: false,
  logoutError: null,
  signupLoading: false,
  signupDone: false,
  signupError: null,
  me: null,
};

// action을 정의
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

export const loginAction = (data) => {
  console.log('loginAction data: ', data);
  return {
    type: LOGIN_REQUEST,
    data,
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

// reducer 구현
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      //* LOGIN
      case LOGIN_REQUEST:
        draft.loginLoading = true;
        draft.loginDone = false;
        draft.loginError = null;
        break;
      case LOGIN_SUCCESS:
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.me = action.data;
        break;
      case LOGIN_FAILURE:
        draft.loginLoading = false;
        draft.loginError = action.error;
        break;
      //* LOAD_MY_INFO
      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = null;
        break;
      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        draft.me = action.data;
        break;
      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;
      //* LOGOUT
      case LOGOUT_REQUEST:
        draft.logoutLoading = true;
        draft.logoutDone = false;
        draft.logoutError = null;
        break;
      case LOGOUT_SUCCESS:
        draft.logoutLoading = false;
        draft.logoutDone = true;
        draft.loginDone = false;
        draft.me = null;
        break;
      case LOGOUT_FAILURE:
        draft.logoutLoading = false;
        draft.logoutError = action.error;
        draft.me = null;
        break;
      //* SIGNUP
      case SIGNUP_REQUEST:
        draft.signupLoading = true;
        draft.signupDone = false;
        draft.signupError = null;
        break;
      case SIGNUP_SUCCESS:
        draft.signupLoading = false;
        draft.signupDone = true;
        break;
      case SIGNUP_FAILURE:
        draft.signupLoading = false;
        draft.signupError = action.error;
        break;
      //* CHANGE_NICKNAME
      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;
      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        draft.me.nickname = action.data.nickname;
      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;
      //* ADD_POST_TO_ME
      case ADD_POST_TO_ME:
        console.log(action.data);
        draft.me.Posts.unshift({ id: action.data });
        break;
      // state.me.Posts.concat({ id: action.data })
      // me: state.me.Posts.concat(action.data),
      //! REMOVE_POST_OF_ME
      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
        break;
      // return {
      //   ...state,
      //   me: {
      //     ...state.me,
      //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
      //   },
      // };
      default:
        break;
    }
  });

export default reducer;
