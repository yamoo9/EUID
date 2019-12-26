import React from 'react';
import StarIcon from './StarIcon';
import digitsToArray from '~/utils/digitsToArray';

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

const StarRating = ({ color, rating, total, ...attrs }) => {
	const stars = digitsToArray(total);
	const negativeStarCount = total - rating;
	return (
		<figure {...attrs} aria-label={parseStarRatingToLabel(rating, total)}>
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

StarRating.defaultProps = {
	total: 5,
	rating: 5,
};

export default StarRating;
