import { createReducer } from '~/utils';

import {
  FETCH_EUID_PENDING,
  FETCH_EUID_FULFILLED,
  FETCH_EUID_REJECTED,
} from '../actions/euidActions';

// --------------------------------------------------
// 초기 상태 값
const initialState = {
  json: null,
  loading: false,
  error: null,
};

// --------------------------------------------------
// 리듀서 핸들러 (액션 타입 별, 핸들러)
const fetchEuidPending = (state) => ({
  ...state,
  loading: true,
});

const fetchEuidFulfilled = (state, action) => {
  return {
    ...state,
    loading: false,
    // JSON 추가
    json: action.json,
  };
};

const fetchEuidRejected = (state, action) => {
  return {
    ...state,
    loading: false,
    // ERROR 추가
    error: action.error,
  };
};

// --------------------------------------------------
// 리듀서 내보내기
export default createReducer(initialState, {
  // 액션 타입 : 핸들러
  [FETCH_EUID_PENDING]: fetchEuidPending,
  [FETCH_EUID_FULFILLED]: fetchEuidFulfilled,
  [FETCH_EUID_REJECTED]: fetchEuidRejected,
});
