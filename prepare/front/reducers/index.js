import { combineReducers } from 'redux'; // 여러 리듀서들을 하나로 합쳐준다.
import { HYDRATE } from 'next-redux-wrapper';

import user from './user';
import post from './post';

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  },
  user, // 여기에 다른 리듀서들을 더 적으면 된다!
  post,
});

export default rootReducer; // _app.js에서 reducer로 사용된다!
