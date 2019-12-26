import './Map.sass';

import React, { useEffect } from 'react';

/**
 * @class Map
 */
const Map = () => {
	const settings = {
		timestamp: '1576734800416',
		key: 'wbh2',
		mapWidth: '360',
		mapHeight: '300',
	};

	useEffect(() => {
		if (window.daum) {
			new window.daum.roughmap.Lander(settings).render();
		}
	});
	return (
		<div
			id="daumRoughmapContainer1576734800416"
			className="root_daum_roughmap root_daum_roughmap_landing"
		/>
	);
};

export default Map;
