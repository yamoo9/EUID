// 참고: https://developer.mozilla.org/ko/docs/Web/API/Element/scrollIntoView

const scrollIntoView = (target = document.body) => {
	target.scrollIntoView({ behavior: 'smooth' });
};

export default scrollIntoView;
