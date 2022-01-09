// 초기 state
export const initialState = {
  isLogedin: false,
  me: null,
};

// action을 정의
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
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

const dummyUser = (data) => ({
  ...data,
  id: 1,
  nickname: '고윤혁',
  Posts: [{ id: 1 }],
});

// reducer 구현
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLogedin: true,
        me: dummyUser(action.data),
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLogedin: false,
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
