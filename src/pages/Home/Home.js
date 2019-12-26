import './Home.sass';

import React, { Fragment, useState, useEffect } from 'react';

import {
	openingDay,
	courses,
	showcases,
	reviews,
	RWD_CAROUSEL_SETTINGS,
} from '~/config/config';

import withHelmet from '@HOC/withHelmet';
import OpeningDay from '@components/OpeningDay/OpeningDay';
import Catchphrase from '@components/Catchphrase/Catchphrase';
import HeadlineSection from '@components/HeadlineSection/HeadlineSection';
import Carousel from '@components/Carousel/Carousel';
import CourseCarouselItem from '@components/CarouselItem/CourseCarouselItem';
import ReviewCarouselItem from '@components/CarouselItem/ReviewCarouselItem';
import ShowcaseCarouselItem from '@components/CarouselItem/ShowcaseCarouselItem';
import LinkMapImage from '@components/LinkMapImage/LinkMapImage';
import Map from '@components/Map/Map';

/**
 * @function detectMode
 * @summary 데스크탑, 모바일 모드 감지 함수
 */
const detectMode = () => (window.innerWidth >= 1024 ? 'desktop' : 'mobile');

/**
 * @class Home
 * @summary 홈 페이지 컴포넌트
 */
const Home = () => {
	const [
		mode,
		setMode,
	] = useState('mobile');
	useEffect(
		() => {
			setMode(detectMode());
			window.addEventListener('resize', () => setMode(detectMode()));
		},
		[
			mode,
		]
	);
	return (
		<Fragment>
			<main id="home">
				<div className="wrapper">
					<Catchphrase>User Interface Develop</Catchphrase>
				</div>
				<div className="container">
					<div id="openingDay" className="wrapper">
						<HeadlineSection
							title="오프닝 데이"
							description="&quot;이듬&quot; 블렌디드 러닝 소개 및 강사와의 대화를 통해 적합한 과정 선별을 위한 가이드를 제공하는 시간을 가져봅니다."
						>
							<OpeningDay openDay={openingDay} />
						</HeadlineSection>
					</div>
					<div id="courseCategory" className="wrapper">
						<HeadlineSection
							title="강의 카테고리"
							description="&quot;이듬&quot; 블렌디드 러닝 카테고리의 각 카드를 선택하면 강의에 대한 상세 정보를 개별 페이지에서 확인할 수 있습니다."
						/>
						<Carousel
							list={courses}
							settings={RWD_CAROUSEL_SETTINGS}
							containerClass="course-carousel"
							customCarouselItem={CourseCarouselItem}
						/>
					</div>
					<div id="showcase" className="wrapper">
						<HeadlineSection
							title="쇼케이스"
							description="&quot;이듬&quot; 블렌디드 러닝 강의 실습 결과물 쇼케이스입니다. 각 카드를 선택하면 결과물을 볼 수 있습니다."
						/>
						<Carousel
							list={showcases}
							settings={RWD_CAROUSEL_SETTINGS}
							containerClass="showcase-carousel"
							customCarouselItem={ShowcaseCarouselItem}
						/>
					</div>
					<div id="review" className="wrapper">
						<HeadlineSection
							title="리뷰"
							description="&quot;이듬&quot; 블렌디드 러닝 강의 수강생의 강의 리뷰입니다. 강의 장/단점에 대한 의견을 남겨주셨습니다."
						/>
						<Carousel
							list={reviews}
							settings={RWD_CAROUSEL_SETTINGS}
							containerClass="review-carousel"
							// 커스텀 캐러셀 아이템 설정 ➜ 리뷰
							customCarouselItem={ReviewCarouselItem}
						/>
					</div>
					<div id="lectureHall" className="wrapper">
						<HeadlineSection
							title="강의장"
							description="서울특별시 강남구 테헤란로 10길 18 K&amp;I타워 2F<br>ILIT 강남역 1번 출구 (도보 약 7분, <a href='http://kko.to/1brs4lujo' target='_blank' rel='noopener noreferrer'>길 찾기)</a>"
						/>
						{mode === 'desktop' ? <Map /> : <LinkMapImage />}
					</div>
				</div>
			</main>
		</Fragment>
	);
};

export default withHelmet(Home, '이듬(EUID) 블렌디드 러닝');
