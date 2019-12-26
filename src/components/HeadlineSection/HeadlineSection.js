import './HeadlineSection.sass';

import React, { useRef, useEffect } from 'react';
import { string } from 'prop-types';

/**
 * @class HeadlineSection
 * @summary 헤드라인 섹션 컴포넌트
 */
const HeadlineSection = ({ title, description, children, ...attrs }) => {
	const desc = useRef(null);

	useEffect(() => {
		if (desc.current) {
			desc.current.innerHTML = description;
		}
	});

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

HeadlineSection.propTypes = {
	title: string.isRequired,
	description: string,
};

export default HeadlineSection;
