import './About.sass';

import React from 'react';
import { campaigns, RWD_CAROUSEL_SETTINGS } from '~/config/config';

import withHelmet from '@HOC/withHelmet';
import Catchphrase from '@components/Catchphrase/Catchphrase';
import HeadlineSection from '@components/HeadlineSection/HeadlineSection';
import Carousel from '@components/Carousel/Carousel';
import CampaignCarouselItem from '@components/CarouselItem/CampaignCarouselItem';

import { ReactComponent as VisionEducation } from '@assets/about/vision-education.svg';
import blPosterPath from '@assets/about/is-blended-learning.png';

/**
 * @class About
 * @summary 소개 페이지 컴포넌트
 */
const About = () => {
	return (
		<main id="about">
			<div className="wrapper">
				<Catchphrase shape="triangle">About Us</Catchphrase>
			</div>
			<div className="wrapper about-section">
				<HeadlineSection
					title="소개"
					description="&quot;이듬&quot; 블렌디드 러닝 교육 과정에 대해 소개합니다."
				>
					<Carousel
						list={campaigns}
						settings={RWD_CAROUSEL_SETTINGS}
						containerClass="campaign-carousel"
						customCarouselItem={CampaignCarouselItem}
					/>
				</HeadlineSection>
			</div>
			<div className="wrapper float-section">
				<HeadlineSection
					data-type="blended-learning"
					title="블렌디드 러닝"
					description="블렌디드 러닝 학습에 대한 소개 영상입니다."
				>
					<video
						className="blended-learning"
						poster={blPosterPath}
						src="https://yamoo9.github.io/FEML/video/is-blended-learning.mp4"
						controls
						preload="true"
					/>
				</HeadlineSection>
				<HeadlineSection
					data-type="vision-education"
					title="비전"
					description="&quot;이듬&quot; 블렌디드 러닝이 지향하는 비전은 동반 성장에 있습니다. 강사에서 수강생으로 한 방향으로 흘러가는 지식 전달이 아닌, 함께 공감하고, 이해하며 경험하는 교육 가치를 통해 공동의 혁신을 이끌어내는 것을 목표로 합니다."
				>
					<VisionEducation role="presentation" className="vision-education" />
					<p className="a11y-hidden">공감과 경험 → 이해 → 교육가치 → 혁신 → 모듈 → 적응</p>
				</HeadlineSection>
			</div>
		</main>
	);
};

export default withHelmet(About, '소개 ↼ 이듬 블렌디드 러닝');
