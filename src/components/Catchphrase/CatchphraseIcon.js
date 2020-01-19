import React, { Fragment, forwardRef } from 'react';

// 참고: https://ko.reactjs.org/docs/react-api.html#reactforwardref
const CatchphraseIcons = forwardRef(({ shape, size, fill, ...attrs }, ref) => {
	return (
		<Fragment>
			<svg width={size} height={size} {...attrs} ref={ref}>
				<use xlinkHref={`#${shape}`} />
			</svg>
			<svg aria-hidden="true">
				<symbol id="ellipse" viewBox="0 0 20 20">
					<circle cx="10" cy="10" r="10" fill={fill} />
				</symbol>
				<symbol id="triangle" viewBox="0 0 24 20">
					<path fill={fill} d="M12 20L.742.5h22.516L12 20z" />
				</symbol>
			</svg>
		</Fragment>
	);
});

CatchphraseIcons.defaultProps = {
	shape: 'ellipse',
	fill: '#373E6A',
	size: 20,
};

export default CatchphraseIcons;
