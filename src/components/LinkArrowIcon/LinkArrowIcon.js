import React from 'react';

const LinkArrowIcon = ({ fill, size, ...attrs }) => {
	return (
		<svg
			{...attrs}
			role="presentation"
			width={size}
			height={size}
			viewBox={`0 0 ${size} ${size}`}
		>
			<path
				d="M1 0C0.447715 0 0 0.447715 0 1V10C0 10.5523 0.447715 11 1 11C1.55228 11 2 10.5523 2 10V2H10C10.5523 2 11 1.55228 11 1C11 0.447715 10.5523 0 10 0H1ZM18.7071 17.2929L1.70711 0.292893L0.292893 1.70711L17.2929 18.7071L18.7071 17.2929Z"
				fill={fill}
			/>
		</svg>
	);
};

LinkArrowIcon.defaultProps = {
	fill: '#4A5960',
	size: 19,
};

export default LinkArrowIcon;
