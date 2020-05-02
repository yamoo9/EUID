/**
 * [미션] React Router의 어떤 컴포넌트를 사용해 내비게이션 링크로 처리해야 할까요?
 * - (힌트) 싱글 페이지 앱 안에서 이동하려면 표준 HTML 링크 요소가 아니라, 라이브러리의 링크 요소를 사용해야 합니다.
 * - (참고) https://reacttraining.com/react-router/web/api/Link
 * - (참고) https://reacttraining.com/react-router/web/api/Link/to-object
 */
import './CourseCarouselItem.sass';
import React, { Component } from 'react';
import { number, object } from 'prop-types';
import { Link } from 'react-router-dom';

// 컴포넌트 추출
import { LinkArrowIcon } from '~/components';

// 유틸리티 함수 추출
import { scrollIntoView } from '~/utils';

/**
 * @class CarouselItem
 * @summary 캐러셀 아이템 컴포넌트
 */
class CarouselItem extends Component {
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
        role="group"
        className="carousel__item type-course"
        aria-roledescription="slide"
        aria-labelledby={titleId}
        aria-label={`${nth}번째(총 ${total}개)`}
      >
        <div className="carousel__item--wrapper" role="group">
          {/* href={{pathname, course}} 설정 */}
          <Link
            to={{
              pathname: `/courses/${item.path}`,
              state: {
                course: item,
              },
            }}
            className="carousel__item--link"
            onClick={(e) => scrollIntoView()}
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
