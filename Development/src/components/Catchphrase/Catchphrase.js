import './Catchphrase.sass';
import React, { useRef, useEffect } from 'react';

// 컴포넌트
import CatchphraseIcon from './CatchphraseIcon';

/**
 * Catchphrase
 * @summary 캐치프라이즈 컴포넌트
 * @param {Object} props 전달 속성 (객체)
 */
const Catchphrase = ({ children, shape, ...attrs }) => {
  // 참조
  const lastLetterEl = useRef(null);
  const letterEl = useRef(null);
  const letterLineEl = useRef(null);
  const shapeEl = useRef(null);

  // 사이드 이펙트
  useEffect(() => {
    const reDrawLine = (isResize) => {
      const lastLetter = lastLetterEl.current;
      const letter = letterEl.current;
      const letterLine = letterLineEl.current;
      const shape = shapeEl.current;

      // 리사이즈 중 lastLetter 문서 객체를 참조 못할 경우 함수 종료
      if (!lastLetter) return;

      const width = lastLetter.clientWidth - letter.clientWidth;
      const shapeWidth = shape.clientWidth;

      lastLetter.style.cssText = `margin-right: ${shapeWidth + 5}px`;

      letterLine.style.cssText = `
        right: ${shapeWidth * 0.5}px;
        width: ${width - shapeWidth * (isResize ? 1 : 2)}px
		  `;
    };

    // 초기 1회 라인 그리기 (0.4초 뒤에)
    window.setTimeout(reDrawLine, 400);

    // 뷰포트 크기 변경 시, 라인 다시 그리기
    window.addEventListener('resize', () =>
      window.setTimeout(() => reDrawLine('resize'), 600)
    );
  }, []);

  // 조건 처리
  const chldrenSplirtBySpace = children.split(' ') || [ 'Catchphrase' ];

  // 렌더링
  return (
    <h1 id="Catchphrase" className="catchphrase" lang="en" {...attrs}>
      {chldrenSplirtBySpace.map((letter, index, letters) => {
        if (letters.length - 1 !== index) {
          return (
            <span key={`letter-${index}`} className="catchphrase__letter">
              {letter}
            </span>
          );
        } else {
          return (
            <span
              key={`letter-${index}`}
              ref={lastLetterEl}
              className={`catchphrase__letter ${letters.length - 1 === index
                ? 'last-letter'
                : ''}`.trim()}
            >
              <span ref={letterEl} className="catchphrase__letter--content">
                {letter}
              </span>
              <span
                role="presentation"
                ref={letterLineEl}
                className="catchphrase__line"
              />
            </span>
          );
        }
      })}

      {/* 캐치프레이즈 아이콘 */}
      <CatchphraseIcon
        ref={shapeEl}
        role="presentation"
        className="catchphrase__icon"
        shape={shape}
      />
    </h1>
  );
};

// Catchphrase 기본 값 설정
Catchphrase.defaultProps = {
  shape: 'ellipse',
};

export default Catchphrase;
