/**
 * @function parseStarRatingToLabel
 * @summary 별점을 해석하여 레이블로 변경하는 함수
 * @param {Number} rating 별점(평점)
 * @param {Number} total 만점 점수
 */
const parseStarRatingToLabel = (rating, total = 5) => {
  let score = rating / total * 100;
  switch (true) {
    case score >= 90:
      return '매우 만족';
    case score >= 70:
      return '만족';
    case score >= 50:
      return '보통';
    case score >= 30:
      return '불만족';
    default:
      return '매우 불만족';
  }
};

export default parseStarRatingToLabel;
