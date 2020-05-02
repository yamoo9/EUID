import './ReviewCarouselItem.sass';
import React, { Component } from 'react';
import { number, object } from 'prop-types';

// HTML React Parser 패키지
import htmlParser from 'html-react-parser';

// 컴포넌트 추출
import { StarRating } from '~/components';

/**
 * @class ReviewCarouselItem
 * @summary 리뷰 캐러셀 아이템 컴포넌트
 */
class ReviewCarouselItem extends Component {
  // 전달 속성 검사
  static propTypes = {
    nth: number.isRequired,
    total: number.isRequired,
    item: object.isRequired,
  };

  // 렌더링
  render() {
    const { nth, total, item } = this.props;
    const titleId = `carousel__title${nth}`;
    return (
      <div
        className="carousel__item type-review"
        role="group"
        aria-roledescription="slide"
        aria-labelledby={titleId}
        aria-label={`${nth}번째(총 ${total}개)`}
      >
        <div className="carousel__item--wrapper" role="group">
          <StarRating className="star-rating-card" rating={item.rating} />
          <h3 id={titleId} className="carousel__item--title">
            {htmlParser(item.title)}
          </h3>
          <blockquote className="carousel__item--quotation">
            <p className="carousel__item--comment">{item.comment}</p>
            <cite className="carousel__item--reviewer">{item.reviewer}</cite>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default ReviewCarouselItem;
