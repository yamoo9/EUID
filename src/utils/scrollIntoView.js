// 참고: https://developer.mozilla.org/ko/docs/Web/API/Element/scrollIntoView

// 화살표 함수의 기본 매개변수로 객체의 기본 값을 설정하는 방법
// ({ a = value, b = value1 }={}) => { ... }

// 화살표 함수의 기본 매개변수로 배열의 기본 값을 설정하는 방법
// ( [a = value, b = value ]=[]) => { ... }

const scrollIntoView = (
  { target = document.body, behavior = 'smooth' } = {}
) => {
  target.scrollIntoView({ behavior });
};

export default scrollIntoView;
