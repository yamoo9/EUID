// 공통 스타일
import './styles/index.sass';

// React & ReactDOM 라이브러리 모듈 추출
import React from 'react';
import ReactDOM from 'react-dom';

// 스토어 모듈(래퍼 컴포넌트) 추출
import { StoreProvider } from './store';

// 유틸리티 함수 추출
import { checkIE } from '~/utils';

// 컴포넌트
import App from './App/App';

// IE 체크 함수 호출
checkIE();

// 렌더링
ReactDOM.render(
  // React 앱에 스토어 연결
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('app')
);

// 배포 시, PWA 설정
if (process.env.NODE_ENV === 'production') {
  // 동적 import() 활용
  import('@dev/serviceWorker')
    .then((serviceWorker) => serviceWorker.register())
    .catch((error) => console.log(error.message));
}
