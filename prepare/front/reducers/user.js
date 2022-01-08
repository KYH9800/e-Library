// 초기 state
export const initialState = {
  isLogedin: false,
  user: null,
};

// action을 정의
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

export const loginAction = (data) => {
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
        isLogedin: true,
        user: action.data,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLogedin: false,
      };
    default:
      return state;
  }
};

export default reducer;
