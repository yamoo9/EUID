import React, { useMemo } from 'react';

// 컴포넌트
import StarIcon from './StarIcon';

// 유틸리티
import digitsToArray from '~/utils/digitsToArray';
import parseStarRatingToLabel from '~/utils/parseStarRatingToLabel';

/**
 * StarRating
 * @summary 별점(평점) 컴포넌트
 * @param {Object} props 전달 속성 (객체)
 */
const StarRating = ({ color, rating, total, ...attrs }) => {
  // 메모이제이션
  // 숫자 → 배열 변경
  const stars = useMemo(() => digitsToArray(total), [ total ]);
  const label = useMemo(() => parseStarRatingToLabel(rating, total), [
    rating,
    total,
  ]);

  // 별점 개수
  const negativeStarCount = total - rating;

  // 렌더링
  return (
    <figure {...attrs} aria-label={label}>
      {stars.map((star, index) => (
        <StarIcon
          key={`starRating-${star}`}
          color={color}
          negative={total - index <= negativeStarCount}
        />
      ))}
    </figure>
  );
};

// 기본 속성 설정
StarRating.defaultProps = {
  total: 5,
  rating: 5,
};

export default StarRating;
