import './HeadlineSection.sass';
import React, { useRef, useEffect } from 'react';
import { string } from 'prop-types';

/**
 * HeadlineSection
 * @summary 헤드라인 섹션 컴포넌트
 */
const HeadlineSection = ({ title, description, children, ...attrs }) => {
  // 참조
  const desc = useRef(null);

  // 사이드 이펙트
  useEffect(
    () => {
      if (desc.current) {
        desc.current.innerHTML = description;
      }
    },
    [ description ]
  );

  // 렌더링
  return (
    <section
      {...attrs}
      className={`headlineSection ${attrs.className || ''}`.trim()}
    >
      <h2 className="headlineSection__title">{title}</h2>
      {description ? (
        <p ref={desc} className="headlineSection__description" />
      ) : null}
      {children}
    </section>
  );
};

// 전달 속성 검사 설정
HeadlineSection.propTypes = {
  title: string.isRequired,
  description: string,
};

export default HeadlineSection;
