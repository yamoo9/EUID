import './Schedule.sass';

import React from 'react';

import { schedules } from '~/config/config';

import withHelmet from '@HOC/withHelmet';
import Catchphrase from '@components/Catchphrase/Catchphrase';

/**
 * @class Schedule
 * @summary 연간 일정 페이지 컴포넌트
 */
const Schedule = () => {
	return (
		<main id="schedule" aria-labelledby="Catchphrase">
			<div className="wrapper">
				<Catchphrase shape="triangle">Annual Schedule</Catchphrase>
			</div>
			<div className="wrapper">
				<ol className="scheduleList">
					{schedules.map(({ id, openDate, individuals }, index) => (
						<li key={id} className="scheduleList__item">
							<b className="scheduleList__number">{index + 1}</b>
							<h2 className="scheduleList__openDate">OPEN — {openDate}</h2>
							<ol className="scheduleList__individualScheduleList">
								{individuals.map((date, k) => (
									<li key={`date-${k}`}>{date}</li>
								))}
							</ol>
						</li>
					))}
				</ol>
			</div>
		</main>
	);
};

export default withHelmet(Schedule, '연간 일정 ↼ 이듬 블렌디드 러닝');
