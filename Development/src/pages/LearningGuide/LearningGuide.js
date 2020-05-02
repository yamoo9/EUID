import './LearningGuide.sass';
import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es';
import { connect } from 'react-redux';

// HOC 컴포넌트 추출
import { withHelmet } from '~/HOC';

// 컴포넌트 추출
import { Catchphrase } from '~/components';

// 스토어 상태 추출
const mapState = ({ euid: { json } }) => ({
  courses: json.courses,
});

/**
 * @function animateMotionPath
 * @summary 모션 경로 애니메이션 함수
 * @reference https://yamoo9.github.io/anime/
 */
const animateMotionPath = () => {
  const motionPath = anime.path('.line-path path');

  anime({
    targets: '.course-ball',
    translateX: motionPath('x'),
    translateY: motionPath('y'),
    rotate: motionPath('angle'),
    easing: 'linear',
    duration: 10000,
    update({ progress, animatables }) {
      const el = animatables[0].target;
      if (progress > 30) {
        el.style.top = '-20px';
      } else {
        el.style.top = '-15px';
      }
    },
    loop: true,
  });
};

/**
 * LearningGuide
 * @summary 학습 안내(Learing Guide) 페이지 컴포넌트
 */
class LearningGuide extends Component {
  // 라이프 사이클 훅
  componentDidMount() {
    animateMotionPath();
  }

  // 렌더링
  render() {
    const { courses } = this.props;

    return (
      <main id="learningGuide" aria-labelledby="Catchphrase">
        <div className="wrapper">
          <Catchphrase shape="triangle">Learning Guide</Catchphrase>
        </div>
        <div className="wrapper map-area">
          <ul className="courseMap">
            {courses.map(({ id, title, description }) => (
              <li className="courseMap__item" data-id={id} key={id}>
                <h2 className="courseMap__name">{title}</h2>
                <p className="courseMap__desc">{description}</p>
              </li>
            ))}
          </ul>

          {/* 학습 흐름 공(ball): 가이드라인에 따라 움직임 */}
          <figure role="presentation" className="course-ball" />

          {/* 학습 가이드라인 */}
          <svg
            className="line-path"
            width="308"
            height="573"
            viewBox="0 0 308 573"
            fill="none"
          >
            <path
              d="M3 0C3 43.7299 3 51.3826 31.4553 51.3826H268.4C280.074 50.4716 303.384 51.3826 304.517 84.1801C305.392 109.543 304.881 126.27 304.517 142.669C305.429 150.139 304.517 183.666 268.4 183.666H31.4553C9.35512 183.666 3 189.569 3 217.556V292.99C3 320.322 5.62664 326.334 31.4553 326.334H277.703C286.641 325.423 304.517 328.958 304.517 350.386V572.691"
              stroke="#DEEDF8"
              strokeWidth="6"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </main>
    );
  }
}

export default withHelmet(
  connect(mapState)(LearningGuide),
  '학습 안내 ↼ 이듬 블렌디드 러닝'
);
