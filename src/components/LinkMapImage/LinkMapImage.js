import './LinkMapImage.sass';

import React from 'react';
import map from '@assets/home/map.jpg';

/**
 * @class LinkMapImage
 */
const LinkMapImage = () => {
	return (
		<a
			className="linkMapImage"
			href="http://kko.to/1brs4lujo"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src={map} alt="'길 찾기' Kakao 지도로 이동" />
		</a>
	);
};

export default LinkMapImage;
