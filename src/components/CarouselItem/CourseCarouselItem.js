import './CourseCarouselItem.sass';

import React, { Component } from 'react';
import { number, object } from 'prop-types';
import { Link } from 'react-router-dom';

import LinkArrowIcon from '@components/LinkArrowIcon/LinkArrowIcon';
import scrollIntoView from '@utils/scrollIntoView';

/**
 * @class CarouselItem
 * @summary 캐러셀 아이템 컴포넌트
 */
class CarouselItem extends Component {
	static propTypes = {
		nth: number.isRequired,
		total: number.isRequired,
		item: object.isRequired,
	};

	render() {
		const { nth, total, item } = this.props;
		const titleId = `carousel__title${nth}`;
		const imagePath = require(`../../assets/${item.image}`);
		return (
			<div
				className="carousel__item type-course"
				role="group"
				aria-roledescription="slide"
				aria-labelledby={titleId}
				aria-label={`${nth}번째(총 ${total}개)`}
			>
				<div className="carousel__item--wrapper" role="group">
					<Link
						to={{
							pathname: `/course/${item.path}`,
							course: item,
						}}
						onClick={(e) => scrollIntoView()}
						className="carousel__item--link"
					>
						<h3 id={titleId} className="carousel__item--title">
							{item.title}
						</h3>
						<img className="carousel__item--image" src={imagePath} alt="" />
						<p className="carousel__item--tags">
							{item.tags.map((tag, index) => (
								<span key={`tag-${index}`} className="carousel__item--tag">
									#{tag}
								</span>
							))}
						</p>
						<LinkArrowIcon className="link-arrow-icon" size="12" />
					</Link>
				</div>
			</div>
		);
	}
}

export default CarouselItem;
