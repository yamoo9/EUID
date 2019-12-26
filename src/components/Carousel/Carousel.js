import './Carousel.sass';

import React, { Component } from 'react';
import { object, array } from 'prop-types';

import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import CarouselItem from '../CarouselItem/CarouselItem';
import CarouselControl from '../CarouselControl/CarouselControl';

/**
 * @class Carousel
 * @summary 캐러셀 컴포넌트
 */
class Carousel extends Component {
	// 전달 속성 유형 검사
	static propTypes = {
		list: array.isRequired,
		settings: object.isRequired,
	};

	// 기본 속성 설정
	static defaultProps = {
		customCarouselItem: null,
	};

	// 커스텀 속성
	multiCarousel = null;

	// 컴포넌트 상태
	state = {
		isMoving: false,
	};

	// 라이프 사이클 훅
	componentDidMount() {
		window.addEventListener('resize', () => {
			this.multiCarousel && this.multiCarousel.goToSlide(0, true);
		});
	}

	// 렌더
	render() {
		const { list, settings, customCarouselItem, containerClass } = this.props;
		const { isMoving } = this.state;
		const Item = customCarouselItem || CarouselItem;

		return (
			<MultiCarousel
				ref={(el) => (this.multiCarousel = el)}
				beforeChange={() => this.setState({ isMoving: true })}
				afterChange={() => this.setState({ isMoving: false })}
				// 설정 참고: http://bit.ly/2Maqjm3
				// 반응형 설정
				responsive={settings}
				// 클래스 속성 설정
				containerClass={`carousel ${containerClass || ''}`.trim()}
				sliderClass="carousel__slider"
				itemClass="carousel__slide"
				draggable={true}
				// 슬라이드 아이템 클릭 시 포커싱 설정
				focusOnSelect={false}
				// 다음 슬라이드 아이템 부분 보임 설정
				partialVisible={true}
				// 최소 터치 드래그 이동 거리 설정
				minimumTouchDrag={40}
				// 커스텀 내비게이션 버튼 설정
				customLeftArrow={
					<CarouselControl label="이전 탐색" direction="left" style={{ left: 4 }} />
				}
				customRightArrow={
					<CarouselControl label="다음 탐색" style={{ right: 4 }} />
				}
			>
				{list.map((item, index) => (
					<Item
						key={item.id}
						nth={index + 1}
						total={list.length}
						item={item}
						isMoving={isMoving}
					/>
				))}
			</MultiCarousel>
		);
	}
}

export default Carousel;
