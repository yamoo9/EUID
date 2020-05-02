import React, { forwardRef } from 'react';

/**
 * withForwardRef HOC 컴포넌트
 * @param {ReactComponent} Comp 리엑트 컴포넌트
 */
const withForwardRef = (Comp) => {
  // 전달 받은 컴포넌트를 forwardRef 컴포넌트로 래핑
  const handle = (props, ref) => <Comp {...props} forwardedRef={ref} />;

  // 디버깅: React 개발도구에서 이름 표시
  const name = Comp.displayName || Comp.name;
  handle.displayName = `withForwardRef(${name})`;

  return forwardRef(handle);
};

export default withForwardRef;
