// configureStore.js
import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import rootSaga from '../sagas';

const loggerMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log('loggerMiddleware(redux-thunk): ', action);
    return next(action);
  };

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(sagaMiddleware))
      : composeWithDevTools(applyMiddleware(sagaMiddleware, loggerMiddleware));
  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV !== 'production',
}); // process.env.NODE_ENV === 'development',
