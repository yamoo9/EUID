import React, { Fragment } from 'react';

// SPA 페이지 별 제목, 메타 정보 제공을 위한 패키지
import { Helmet } from 'react-helmet';

/**
 * withHelmet HOC 컴포넌트
 * @param {ReactComponent} Comp 리엑트 컴포넌트
 */
const withHelmet = (Comp, title) => {
  // 전달 받은 컴포넌트를 forwardRef 컴포넌트로 래핑
  const handle = (props) => (
    <Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Comp {...props} />
    </Fragment>
  );

  // 디버깅: React 개발도구에서 이름 표시
  const name = Comp.displayName || Comp.name;
  handle.displayName = `withHelmet(${name})`;

  return handle;
};

export default withHelmet;
