import './ShowcaseCarouselItem.sass';

import React, { Component } from 'react';
import { number, object } from 'prop-types';
import htmlParser from 'html-react-parser';

import LinkArrowIcon from '../LinkArrowIcon/LinkArrowIcon';

/**
 * @function parseBgImageCode
 * @param {String} bgImage 배경 이미지 주소
 * @returns {String} 배경 이미지 CSS 코드
 */
const parseBgImageCode = (bgImage) =>
	`linear-gradient(180deg, rgba(255, 255, 255, 0) 20%, rgba(38, 43, 66, 0.55) 55%), 
   url(${bgImage}) no-repeat center / cover
  `;

/**
 * @class ShowcaseCarouselItem
 * @summary 쇼케이스 캐러셀 아이템 컴포넌트
 */
class ShowcaseCarouselItem extends Component {
	static propTypes = {
		nth: number.isRequired,
		total: number.isRequired,
		item: object.isRequired,
	};

	render() {
		const { nth, total, item } = this.props;
		const titleId = `carousel__title${nth}`;
		const bgImage = item.image ? require(`../../assets/${item.image}`) : null;
		return (
			<div
				className="carousel__item type-showcase"
				role="group"
				aria-roledescription="slide"
				aria-labelledby={titleId}
				aria-label={`${nth}번째(총 ${total}개)`}
				style={
					bgImage ? (
						{
							background: parseBgImageCode(bgImage),
						}
					) : null
				}
			>
				<div className="carousel__item--wrapper" role="group">
					<a
						className="carousel__item--link"
						href={item.link}
						target="_blank"
						rel="noreferrer noopener"
					>
						<h3 id={titleId} className="carousel__item--title">
							{htmlParser(item.title)}
						</h3>
						<p className="carousel__item--description">
							{htmlParser(item.description)}
						</p>
						<LinkArrowIcon className="link-arrow-icon" size="12" fill="#fff" />
					</a>
				</div>
			</div>
		);
	}
}

export default ShowcaseCarouselItem;
