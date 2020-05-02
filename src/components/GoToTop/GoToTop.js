import './GoToTop.sass';
import React, { Component, createRef } from 'react';
import { createPortal } from 'react-dom';

// 유틸리티 함수 추출
import { scrollIntoView } from '~/utils';

/**
 * GoToTop
 * @summary 페이지 상단 이동 버튼 컴포넌트
 */
class GoToTop extends Component {
  // 참조
  gotoButton = createRef();

  // 라이프 사이클 훅
  componentDidMount() {
    const btn = this.gotoButton.current;

    // 이벤트 핸들링
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 500) {
        btn.classList.add('scrolled');
      } else {
        btn.classList.remove('scrolled');
      }
    });
  }

  render() {
    return createPortal(
      <button
        ref={this.gotoButton}
        className="gotoTop"
        onClick={() => scrollIntoView()}
        aria-label="페이지 상단 이동"
      >
        &#xE001;
      </button>,
      document.body
    );
  }
}

export default GoToTop;
