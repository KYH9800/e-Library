// DummyData
// const dummyUser = (data) => ({
//   ...data,
//   id: 1,
//   nickname: '고윤혁',
//   email: 'sksgur3@naver.com',
//   password: 'dbsgur!',
//   Posts: [{ id: 1, post: '01', post: '02' }],
// });

// 초기 state
export const initialState = {
  // isLogedin: false, // fake
  loginLoading: false,
  loginDone: false,
  loginError: null,
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

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const CHANGE_NICKNAME = 'CHANGE_NICKNAME';

export const loginAction = (data) => {
  console.log('loginAction data: ', data);
  return {
    type: LOGIN_REQUEST,
    data,
  };
};

export const logoutAction = (data) => {
  return {
    type: LOGOUT_REQUEST,
    data,
  };
};

// reducer 구현
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginLoading: true,
        loginDone: false,
        loginError: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        loginDone: true,
        me: action.data,
        // isLogedin: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginLoading: false,
        loginError: action.arror,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        logoutLoading: true,
        logoutDone: false,
        logoutError: null,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        logoutLoading: false,
        logoutDone: true,
        loginDone: false,
        me: action.data,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        logoutLoading: false,
        logoutError: action.error,
        me: null,
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        signupLoading: true,
        signupDone: false,
        signupError: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupLoading: false,
        signupDone: true,
        me: action.data,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signupLoading: false,
        signupError: action.arror,
      };
    case CHANGE_NICKNAME:
      return {
        ...state,
        me: {
          ...state.me,
          nickname: action.data,
        },
      };
    default:
      return state;
  }
};

export default reducer;
