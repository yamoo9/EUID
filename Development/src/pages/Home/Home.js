import './Home.sass';
import React, { Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// HOC 컴포넌트 추출
import { withHelmet } from '~/HOC';

// 컴포넌트 추출
import {
  OpeningDay,
  Catchphrase,
  HeadlineSection,
  Carousel,
  CourseCarouselItem,
  ReviewCarouselItem,
  ShowcaseCarouselItem,
  LinkMapImage,
  Map,
} from '~/components';

/**
 * @function detectMode
 * @summary 데스크탑, 모바일 모드 감지 함수
 */

/**
 * Home
 * @summary 홈 페이지 컴포넌트
 */
const Home = () => {
  // 컴포넌트 상태 추출
  const {
    RWD_CAROUSEL_SETTINGS,
    openingDay,
    showcases,
    courses,
    reviews,
  } = useSelector(({ euid: { json } }) => json);

  // 상태
  const [ mode, setMode ] = useState('mobile');

  // 사이드 이펙트
  useEffect(
    () => {
      const changeMode = () =>
        setMode(window.innerWidth >= 1024 ? 'desktop' : 'mobile');

      // 로드(1회) 실행
      changeMode();

      // 리사이즈
      window.addEventListener('resize', changeMode);

      // [클린업(cleanup) 오류 메시지]
      // Warning: Can't perform a React state update on an unmounted component.
      // This is a no - op, but it indicates a memory leak in your application.
      // To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
      //
      // <오류 메시지 해석>
      // 경고: 언마운트 된 컴포넌트는 React 상태 업데이트를 수행 할 수 없습니다.
      // 컴포넌트는 작동하지 않을 뿐더러 메모리 누수 문제를 야기합니다.
      // 이 문제를 해결하려면 useEffect() 훅 안에서 클린업(cleanup) 함수를 사용해야 합니다.
      return () => window.removeEventListener('resize', changeMode);
    },
    [ mode ]
  );

  // 렌더링
  return (
    <Fragment>
      <main id="home">
        <div className="wrapper">
          <Catchphrase>User Interface Develop</Catchphrase>
        </div>
        <div className="container">
          <div id="openingDay" className="wrapper">
            <HeadlineSection
              title="오프닝 데이"
              description="&quot;이듬&quot; 블렌디드 러닝 소개 및 강사와의 대화를 통해 적합한 과정 선별을 위한 가이드를 제공하는 시간을 가져봅니다."
            >
              <OpeningDay openDay={openingDay} />
            </HeadlineSection>
          </div>
          <div id="courseCategory" className="wrapper">
            <HeadlineSection
              title="강의 카테고리"
              description="&quot;이듬&quot; 블렌디드 러닝 카테고리의 각 카드를 선택하면 강의에 대한 상세 정보를 개별 페이지에서 확인할 수 있습니다."
            />
            <Carousel
              list={courses}
              settings={RWD_CAROUSEL_SETTINGS}
              containerClass="course-carousel"
              customCarouselItem={CourseCarouselItem}
            />
          </div>
          <div id="showcase" className="wrapper">
            <HeadlineSection
              title="쇼케이스"
              description="&quot;이듬&quot; 블렌디드 러닝 강의 실습 결과물 쇼케이스입니다. 각 카드를 선택하면 결과물을 볼 수 있습니다."
            />
            <Carousel
              list={showcases}
              settings={RWD_CAROUSEL_SETTINGS}
              containerClass="showcase-carousel"
              customCarouselItem={ShowcaseCarouselItem}
            />
          </div>
          <div id="review" className="wrapper">
            <HeadlineSection
              title="리뷰"
              description="&quot;이듬&quot; 블렌디드 러닝 강의 수강생의 강의 리뷰입니다. 강의 장/단점에 대한 의견을 남겨주셨습니다."
            />
            <Carousel
              list={reviews}
              settings={RWD_CAROUSEL_SETTINGS}
              containerClass="review-carousel"
              // 커스텀 캐러셀 아이템 설정 ➜ 리뷰
              customCarouselItem={ReviewCarouselItem}
            />
          </div>
          <div id="lectureHall" className="wrapper">
            <HeadlineSection
              title="강의장"
              description="서울특별시 강남구 테헤란로 10길 18 K&amp;I타워 2F<br>ILIT 강남역 1번 출구 (도보 약 7분, <a href='http://kko.to/1brs4lujo' target='_blank' rel='noopener noreferrer'>길 찾기)</a>"
            />
            {mode === 'desktop' ? <Map /> : <LinkMapImage />}
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default withHelmet(Home, '이듬(E.UID) 블렌디드 러닝');
