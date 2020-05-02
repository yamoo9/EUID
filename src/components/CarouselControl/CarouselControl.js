import './CarouselControl.sass';

import React from 'react';
import { string } from 'prop-types';

/**
 * CarouselControl
 * @summary 캐러셀 컨트롤 컴포넌트
 * @param {Object} props 전달 속성 (객체)
 */
const CarouselControl = ({ label, color, direction, onClick, style }) => (
  <button
    type="button"
    className="carousel__control"
    aria-label={label}
    onClick={() => onClick()}
    style={style}
  >
    <svg
      style={{
        display: 'block',
        transform: `rotateY(${direction === 'left' ? 180 : 0}deg)`,
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.3431 0.92888L32.7071 7.29284C33.0976 7.68336 33.0976 8.31653 32.7071 8.70705L26.3431 15.071C25.9526 15.4615 25.3195 15.4615 24.9289 15.071C24.5384 14.6805 24.5384 14.0473 24.9289 13.6568L29.5858 8.99995H0V6.99995H29.5858L24.9289 2.34309C24.5384 1.95257 24.5384 1.3194 24.9289 0.92888C25.3195 0.538355 25.9526 0.538355 26.3431 0.92888Z"
        fill={color}
      />
    </svg>
  </button>
);

// 기본 속성 설정
CarouselControl.defaultProps = {
  color: '#C8C9CE',
  direction: 'right',
};

// 전달 속성 유형 검사
CarouselControl.propTypes = {
  label: string.isRequired,
};

export default CarouselControl;
