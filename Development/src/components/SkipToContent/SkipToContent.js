import './SkipToContent.sass';
import React, { useCallback, useState, useEffect } from 'react';

// 유틸리티 함수 추출
import { focusingTarget, scrollIntoView } from '~/utils/index';

/**
 * SkipToContent
 * @summary 메인 영역으로 바로 이동 컴포넌트
 */
const SkipToContent = () => {
  // 상태
  const [ isHidden, setIsHidden ] = useState(true);

  // 핸들러
  const handleFocusAndScrollIntoMain = useCallback((e) => {
    const main = document.querySelector('main');
    focusingTarget(main);
    scrollIntoView(main);
    e.preventDefault();
  }, []);

  // 사이드 이펙트
  useEffect(() => {
    // 페이지 로딩 과정에서 "본문 바로가기" 링크가 화면에 표시되지 않도록 설정
    window.setTimeout(() => setIsHidden(false));
  }, []);

  // 렌더링
  return (
    <a
      hidden={isHidden}
      href="#go-to-main"
      className="skip-to-content"
      onClick={handleFocusAndScrollIntoMain}
    >
      본문 바로가기
    </a>
  );
};

export default SkipToContent;
