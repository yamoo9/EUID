import './OpeningDay.sass';
import React, { useMemo } from 'react';
import { string } from 'prop-types';

// 컴포넌트
import LinkArrowIcon from '../LinkArrowIcon/LinkArrowIcon';

// 에셋
import joinUsImg from '~/assets/home/openingDay.jpg';
import joinUs2xImg from '~/assets/home/openingDay@2x.jpg';

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
 * OpeningDay
 * @param {Object} props 전달 속성 (객체)
 */
const OpeningDay = ({ openDay }) => {
  // 메모이제이션
  const parsedOpenDay = useMemo(() => parseOpenDay(openDay), [ openDay ]);
  const { y, d, koreanDay } = parsedOpenDay;

  // 렌더링
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

// 전달 속성 검사 설정
OpeningDay.propTypes = {
  openDay: string.isRequired,
};

export default OpeningDay;
