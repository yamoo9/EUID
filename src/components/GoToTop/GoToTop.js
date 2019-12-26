import './GoToTop.sass';

import React, { Component, createRef } from 'react';
import scrollIntoView from '@utils/scrollIntoView';

/**
 * @class GoToTop
 * @summary 페이지 상단 이동 버튼 컴포넌트
 */
class GoToTop extends Component {
	gotoButton = createRef();

	componentDidMount() {
		const btn = this.gotoButton.current;
		window.addEventListener('scroll', (e) => {
			if (window.scrollY > 500) {
				btn.classList.add('scrolled');
			}
			else {
				btn.classList.remove('scrolled');
			}
		});
	}

	render() {
		return (
			<button
				ref={this.gotoButton}
				className="gotoTop"
				onClick={() => scrollIntoView()}
				aria-label="페이지 상단 이동"
			>
				&#xE001;
			</button>
		);
	}
}

export default GoToTop;
