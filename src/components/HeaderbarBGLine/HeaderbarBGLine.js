import './HeaderbarBGLine.sass';
import React, { useState, useEffect } from 'react';

// 애니메이션 라이브러리 패키지
import anime from 'animejs/lib/anime.es';

// 라인 애니메이션 지속시간
let time = 3000;

/**
 * HeaderbarBGLine
 * @summary 헤더바 배경 라인 컴포넌트
 * @param {Object} props
 */
const HeaderbarBGLine = ({ duration }) => {
  // 상태
  const [ animated ] = useState(true);

  // 조건 처리
  if (duration) {
    time = duration;
  }

  // 사이드 이펙트
  useEffect(
    () => {
      // SVG path 몰핑 애니메이션 함수
      const animateSVGPath = () => {
        return anime({
          targets: '.bgLine path',
          d: [
            {
              value: [
                'M198.37 92.1598C70.1123 62.554 21.4611 83.6662 0.213928 83.6662V0.728333H375.214V83.6662C346.451 83.6662 315.483 119.193 198.37 92.1598Z',
              ],
            },
            {
              value:
                'M198.156 91.4315C80.26 111.916 18.5913 94.9289 0 82.9379V0H375V82.9379C355.351 78.9409 292.473 75.0438 198.156 91.4315Z',
            },
          ],
          easing: 'linear',
          duration: time,
          autoplay: true,
          direction: 'alternate',
          loop: true,
        });
      };

      // SVG path 몰핑 애니메이션 함수 실행
      animateSVGPath();
    },
    [ animated ]
  );

  // 렌더링
  return (
    <svg viewBox="0 0 375 101" preserveAspectRatio="none" className="bgLine">
      <path d="M198.156 91.4315C80.26 111.916 18.5913 94.9289 0 82.9379V0H375V82.9379C355.351 78.9409 292.473 75.0438 198.156 91.4315Z" />
    </svg>
  );
};

export default HeaderbarBGLine;
