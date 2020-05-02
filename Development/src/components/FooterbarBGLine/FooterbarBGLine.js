import './FooterbarBGLine.sass';
import React, { useState, useEffect } from 'react';

// 애니메이션 라이브러리 패키지
import anime from 'animejs/lib/anime.es';

// 라인 애니메이션 지속시간
let time = 3000;

/**
 * @function animateSVGPath
 * @summary  SVG path 몰핑 애니메이션
 */
const animateSVGPath = () => {
  return anime({
    targets: '.footerbar__bgLine path',
    d: [
      {
        value:
          'M176.844 8.56842C260.688 27.1369 294 35.9999 375 17.0621V260H0V17.0621C14 8.56842 93 -10.0001 176.844 8.56842Z',
      },
    ],
    easing: 'linear',
    duration: time,
    autoplay: true,
    direction: 'alternate',
    loop: true,
  });
};

/**
 * FooterbarBGLine
 * @summary 푸터바 배경 라인 컴포넌트
 */
const FooterbarBGLine = ({ duration }) => {
  // 상태
  const [ animated ] = useState(true);

  // 조건 설정
  if (duration) {
    time = duration;
  }

  // 사이드 이펙트
  useEffect(
    () => {
      animateSVGPath();
    },
    [ animated ]
  );

  // 렌더링
  return (
    <svg
      viewBox="0 0 375 261"
      preserveAspectRatio="none"
      className="footerbar__bgLine"
    >
      <path
        d="M176.844 9.5685C294.74 -10.9162 356.409 6.07112 375 18.0621V261H0V18.0621C19.6493 22.0591 82.5272 25.9562 176.844 9.5685Z"
        fill="#5382F6"
      />
    </svg>
  );
};

export default FooterbarBGLine;
