import './Catchphrase.sass';

import React, { useRef, useEffect } from 'react';
import CatchphraseIcon from './CatchphraseIcon';

/**
 * @class Catchphrase
 * @summary 캐치프라이즈 컴포넌트
 * @param {Object} props 부모 컴포넌트로부터 전달 받은 속성(들)
 */
const Catchphrase = ({ children, shape, ...attrs }) => {
	const chldrenSplirtBySpace = children.split(' ') || [
		'Catchphrase',
	];

	const lastLetterEl = useRef(null);
	const letterEl = useRef(null);
	const letterLineEl = useRef(null);
	const shapeEl = useRef(null);

	const reDrawLine = (isResize) => {
		const lastLetter = lastLetterEl.current;
		const letter = letterEl.current;
		const letterLine = letterLineEl.current;
		const shape = shapeEl.current;

		// 리사이즈 중 lastLetter 문서 객체를 참조 못할 경우 함수 종료
		if (!lastLetter) return;

		const width = lastLetter.clientWidth - letter.clientWidth;
		const shapeWidth = shape.clientWidth;

		lastLetter.style.cssText = `
		  margin-right: ${shapeWidth + 5}px
		`;

		letterLine.style.cssText = `
      right: ${shapeWidth * 0.5}px;
      width: ${width - shapeWidth * (isResize ? 1 : 2)}px
		`;
	};

	useEffect(() => {
		reDrawLine();
		window.addEventListener('resize', () =>
			window.setTimeout(() => reDrawLine('resize'), 600)
		);
	});
	return (
		<h1 id="Catchphrase" className="catchphrase" lang="en" {...attrs}>
			{chldrenSplirtBySpace.map((letter, index, letters) => {
				if (letters.length - 1 !== index) {
					return (
						<span key={`letter-${index}`} className="catchphrase__letter">
							{letter}
						</span>
					);
				}
				else {
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
			<CatchphraseIcon
				ref={shapeEl}
				role="presentation"
				className="catchphrase__icon"
				shape={shape}
			/>
		</h1>
	);
};

Catchphrase.defaultProps = {
	shape: 'ellipse',
};

export default Catchphrase;
