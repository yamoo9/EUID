import './OpeningDay.sass';

import React from 'react';
import { string } from 'prop-types';

import LinkArrowIcon from '../LinkArrowIcon/LinkArrowIcon';
import joinUsImg from '@assets/home/openingDay.jpg';
import joinUs2xImg from '@assets/home/openingDay@2x.jpg';

/**
 * @function parseOpenDay
 * @param {String} openDay 오프닝 데이 날짜
 */
const parseOpenDay = (openDay) => {
	const openDayList = openDay.split('-');
	const yyyy = openDayList[0];
	const mm = openDayList[1];
	const dd = openDayList[2];
	return {
		y: yyyy,
		d: mm + dd,
		koreanDay: `${yyyy}년 ${mm}월 ${dd}일`,
	};
};

/**
 * @class OpeningDay
 * @param {Object} props 부모 컴포넌트 전달 속성
 */
const OpeningDay = ({ openDay }) => {
	const parsedOpenDay = parseOpenDay(openDay);
	const { y, d, koreanDay } = parsedOpenDay;

	return (
		<figure className="openingDay">
			<a
				href="https://forms.gle/jtSsGEtw7Gy2AELW9"
				rel="noopener noreferrer"
				target="_blank"
			>
				<img
					srcSet={`${joinUs2xImg} 2x`}
					src={joinUsImg}
					width="335"
					height="274"
					alt=""
				/>
				<figcaption aria-label={koreanDay} title={koreanDay}>
					{y}
					<b>{d}</b>
				</figcaption>
			</a>
			<LinkArrowIcon className="link-arrow-icon" size="16" fill="#EB5254" />
		</figure>
	);
};

OpeningDay.propTypes = {
	openDay: string.isRequired,
};

export default OpeningDay;
