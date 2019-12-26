import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

// 참고: https://stackoverflow.com/a/49439893

const LinkButton = ({
	children,
	history,
	location,
	match,
	staticContext,
	to,
	onClick,
	...attrs
}) => {
	return (
		<button
			type="button"
			{...attrs}
			onClick={(e) => {
				onClick && onClick(e);
				history.push(to);
			}}
		>
			{children}
		</button>
	);
};

LinkButton.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default withRouter(LinkButton);
