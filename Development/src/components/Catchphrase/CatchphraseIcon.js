import React, { Fragment, forwardRef } from 'react';

/**
 * CatchphraseIcons
 * @summary 캐치프라이즈 아이콘 컴포넌트
 * @param {Object} props 전달 속성 (객체)
 */
const CatchphraseIcons = forwardRef(({ shape, size, fill, ...attrs }, ref) => {
  return (
    <Fragment>
      <svg width={size} height={size} {...attrs} ref={ref}>
        <use xlinkHref={`#${shape}`} />
      </svg>
      <svg aria-hidden="true" className="a11y-hidden">
        <symbol id="ellipse" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="10" fill={fill} />
        </symbol>
        <symbol id="triangle" viewBox="0 0 24 20">
          <path fill={fill} d="M12 20L.742.5h22.516L12 20z" />
        </symbol>
      </svg>
    </Fragment>
  );
});

// 기본 값 설정
CatchphraseIcons.defaultProps = {
  shape: 'ellipse',
  fill: '#373E6A',
  size: 20,
};

export default CatchphraseIcons;
