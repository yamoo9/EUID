import React from 'react';

const StarIcon = ({ color, negative }) => {
	return (
		<svg role="presentation" width="29" height="27" viewBox="0 0 29 27">
			<path
				d="M14.4 0.600098L17.633 10.5503H28.0952L19.6311 16.6998L22.8641 26.6499L14.4 20.5004L5.93589 26.6499L9.1689 16.6998L0.704788 10.5503H11.167L14.4 0.600098Z"
				fill={color}
				opacity={negative ? 0.2 : 1}
			/>
		</svg>
	);
};

StarIcon.defaultProps = {
	negative: false,
	color: '#fff',
};

export default StarIcon;
