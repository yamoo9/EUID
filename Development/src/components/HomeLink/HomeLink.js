/**
 * [미션] SPA에서 홈 링크를 설정하려면 어떤 컴포넌트를 사용해야 할까요?
 * - (힌트) 싱글 페이지 앱 안에서 이동하려면 표준 HTML 링크 요소가 아니라, 라이브러리의 링크 요소를 사용해야 합니다.
 * - (참고) https://reacttraining.com/react-router/web/api/Link
 */

import './HomeLink.sass';
import React from 'react';
import { Link } from 'react-router-dom';

// 에셋
import { ReactComponent as Logo } from '~/assets/EUID-logo.svg';

/**
 * HomeLink
 * @summary 홈 링크 컴포넌트
 */
const HomeLink = ({ label = '홈 페이지 이동', handleHideMenu = null }) => (
  <h1 className="headerbar__homelink">
    <Link
      to="/"
      aria-label={label}
      className="headerbar__homelink--link"
      onClick={handleHideMenu}
    >
      <Logo className="headerbar__homelink--logo" />
    </Link>
  </h1>
);

export default HomeLink;
