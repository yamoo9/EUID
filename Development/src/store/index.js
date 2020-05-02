/**
 * [미션] 스토어 설정 코드를 작성합니다.
 * - (힌트) 스토어 생성(create), 리듀서 병합(combine)
 * - (힌트) 미들웨어 적용(apply), 개발 도구 구성(compose)
 * - (힌트) 스토어 공급자(Provider) 래퍼 컴포넌트
 * - (참고) https://redux.js.org/api/createStore
 * - (참고) https://redux.js.org/api/combinereducers
 * - (참고) https://redux.js.org/api/applymiddleware
 * - (참고) http://bit.ly/composeWithDevTools
 * - (참고) https://react-redux.js.org/api/provider
 */

import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// 리듀서
import { euidReducer } from '~/store/reducers';

/**
 * 미들웨어
 */
const middlewares = [ thunk ];

// 개발 모드에서만 로거 미들웨어 추가
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

/**
 * 루트 리듀서
 */
const rootReducer = combineReducers({
  euid: euidReducer,
});

/**
 * 스토어
 */
export const store = createStore(
  // 루트 리듀서 설정
  rootReducer,
  // 인헨서(기능 추가)
  composeWithDevTools(applyMiddleware(...middlewares))
);

/**
 * 스토어 공급자 래퍼 컴포넌트
 */
export const StoreProvider = (props) => (
  <Provider store={store}>{props.children}</Provider>
);
