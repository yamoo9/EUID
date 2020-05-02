import './CampaignCarouselItem.sass';
import React, { Component } from 'react';
import { number, object } from 'prop-types';

// HTML React Parser 패키지
import htmlParser from 'html-react-parser';

/**
 * @class CampaignCarouselItem
 * @summary 캠페인 캐러셀 아이템 컴포넌트
 */
class CampaignCarouselItem extends Component {
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
    const imagePath = require(`../../assets/${item.image}`);
    return (
      <div
        className="carousel__item type-campaign"
        role="group"
        aria-roledescription="slide"
        aria-labelledby={titleId}
        aria-label={`${nth}번째(총 ${total}개)`}
      >
        <div className="carousel__item--wrapper" role="group">
          <figure>
            <img src={imagePath} alt="" />
            <figcaption>{htmlParser(item.message)}</figcaption>
          </figure>
        </div>
      </div>
    );
  }
}

export default CampaignCarouselItem;
