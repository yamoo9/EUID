import React, { useLayoutEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useSpring, animated, config } from 'react-spring';

// 비동기 액션 크리에이터 함수 추출
import { fetchEuidDataAsync } from '~/store/actions/euidActions';

// 컴포넌트 추출
import {
  SkipToContent,
  Headerbar,
  Footerbar,
  GoToTop,
  AppLoading,
} from '~/components';

// 지연 처리 함수 추출
// import { delay } from '~/utils';

// 페이지 컴포넌트 추출
import {
  Home,
  About,
  Course,
  Schedule,
  LearningGuide,
  FAQ,
  BrandStory,
  PrivacyPolicy,
  PageNotFound,
} from '~/pages';

/**
 * App
 * @summary 앱 컴포넌트
 */
const App = () => {
  // 선택자 훅
  const { loading, json, error } = useSelector(({ euid }) => euid);

  // 디스패치 훅
  const dispatch = useDispatch();

  // useSpring() 훅을 사용해 React Spring 애니메이션 설정
  // loading 상태 값에 따라 불투명도 애니메이션 처리
  const animatedProps = useSpring({
    opacity: loading ? 0 : 1,
    marginTop: loading ? 500 : 0,
    config: config.default,
  });

  // 사이드 이펙트
  useLayoutEffect(
    () => {
      // 즉시 처리
      dispatch(fetchEuidDataAsync());

      // 지연 처리 시뮬레이션
      /* delay(200).then(() => {
        // 초기 이듬(E.UID) 데이터 패치 요청
        dispatch(fetchEuidDataAsync());
      }); */
    },
    [ dispatch ]
  );

  // 로딩 중 또는 json 데이터가 없을 경우
  if (loading || !json) {
    return <AppLoading />;
  }

  // 오류가 발생한 경우
  // 별도의 오류 페이지 컴포넌트를 화면에 표시할 수도 있습니다.
  if (error) {
    return <div>{error.message}</div>;
  }

  // 로딩 종료, json 데이터가 존재할 경우
  // React Spring 라이브리러의 animated 컴포넌트를 사용해 애니메이션 설정
  return (
    <Router>
      <animated.div className="animateWrapper" style={animatedProps}>
        <SkipToContent />
        <Headerbar />

        {/* 라우터 설정 */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/courses/:courseName" component={Course} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/learning-guide" component={LearningGuide} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/brand-story" component={BrandStory} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          {/* 페이지를 못 찾을 경우 */}
          <Route component={PageNotFound} />
        </Switch>

        <GoToTop />
        <Footerbar />
      </animated.div>
    </Router>
  );
};

export default App;
