import './CarouselItem.sass';

import React, { Component } from 'react';
import { number, object } from 'prop-types';

import { Link } from 'react-router-dom';
import LinkArrowIcon from '../LinkArrowIcon/LinkArrowIcon';

/**
 * @class CarouselItem
 * @summary 캐러셀 아이템 컴포넌트
 */
class CarouselItem extends Component {
  // 전달 속성 유형 검사
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
        className="carousel__item"
        role="group"
        aria-roledescription="slide"
        aria-labelledby={titleId}
        aria-label={`${nth}번째(총 ${total}개)`}
      >
        <div className="carousel__item--wrapper" role="group">
          <Link to={`/course/${item.path}`} className="carousel__item--link">
            <h3 id={titleId} className="carousel__item--title">
              {item.title}
            </h3>
          </Link>
          <img className="carousel__item--image" src={imagePath} alt="" />
          <p className="carousel__item--tags">
            {item.tags.map((tag, index) => (
              <span key={`tag-${index}`} className="carousel__item--tag">
                #{tag}
              </span>
            ))}
          </p>
          <LinkArrowIcon className="link-arrow-icon" size="12" />
        </div>
      </div>
    );
  }
}

export default CarouselItem;
