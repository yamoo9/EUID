import './SkipToContent.sass';

import React, { Component } from 'react';

import focusingTarget from '@utils/focusingTarget';
import scrollIntoView from '@utils/scrollIntoView';

/**
 * @class SkipToContent
 */
class SkipToContent extends Component {
	render() {
		return (
			<a
				href="#go-to-main"
				className="skip-to-content"
				onClick={(e) => {
					e.preventDefault();
					const main = document.querySelector('main');
					focusingTarget(main);
					scrollIntoView(main);
				}}
			>
				본문 바로가기
			</a>
		);
	}
}

export default SkipToContent;
