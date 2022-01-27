import './Course.sass';
import React, { Component } from 'react';
import htmlParser from 'html-react-parser';
import { connect } from 'react-redux';

// HOC 컴포넌트 추출
import { withHelmet } from '~/HOC';

// 컴포넌트 추출
import { Catchphrase, HeadlineSection } from '~/components';

// 스토어 상태 추출
const mapState = ({ euid: { json } }) => ({
  courses: json.courses,
});

/**
 * Course
 * @summary 과정(course) 페이지 컴포넌트
 */
class Course extends Component {
  // [상태]
  state = {
    course: {},
  };

  // [클래스 멤버]
  // 컴파운드 컴포넌트: <Course.Curiculum />
  static Curiculum = ({ index, children: chapter }) => (
    <li>
      <h3>{index + 1}주차</h3>
      <p>{htmlParser(chapter)}</p>
    </li>
  );

  // [라이프 사이클 훅]
  // 컴포넌트 생성 이후, props 데이터를 가공하여 state로 설정
  static getDerivedStateFromProps(props) {
    let course;

    // 라우트의 location 정보 중 state 값이 존재할 경우
    if (props.location.state) {
      course = props.location.state.course;
    } else {
      course = props.courses.find(
        (course) => course.path === props.match.params.courseName
      );
    }

    // 컴포넌트 (로컬) 상태 업데이트
    return {
      course,
    };
  }

  // 업데이트 할 때, 마다 실행
  shouldComponentUpdate(nextProps, nextState) {
    // 라우트 정보가 변경되면 과정 콘텐츠 변경
    if (nextProps.match.params.courseName !== nextState.course.path) {
      // 다른 경로일 경우만 상태 업데이트
      this.fetchCourse();
    }
    return true;
  }

  // 마운트 후 실행(1회)
  componentDidMount() {
    // this.fetchCourse();
  }

  // [메서드]
  fetchCourse = () => {
    const { courses, match } = this.props;
    const newCourse = courses.find(
      (course) => course.path === match.params.courseName
    );
    this.setState({
      course: newCourse,
    });
  };

  // [DEPRECATED] euidDB.json을 사용할 경우에만 사용 되었음
  fetchCourseAsync = async () => {
    try {
      const courses = (await require('~/common/euidDB.json')).courses;
      const course = courses.find(
        (course) => course.path === this.props.match.params.courseName
      );

      this.setState({
        course,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  registerCourse = (url) => {
    // [참고] https://developer.mozilla.org/ko/docs/Web/API/Location/assign
    // location.assign() => 히스토리에 기록 남음
    // location.replace() => 히스토리에 기록 안 남음
    window.location.assign(url);
  };

  // 렌더링
  render() {
    const { course } = this.state;

    const {
      goal,
      audienceTypes,
      scheduleTypes,
      courseDescription: desc,
      tutor,
    } = (course && course.details) || {};

    const courseImagePath = course && require(`~/assets/${course.image}`);

    return !course ? null : (
      <main id="course">
        <div className="wrapper course">
          <Catchphrase shape="triangle">Course Description</Catchphrase>
          <div className="course__container">
            <figure className="course__main">
              <img src={courseImagePath} alt="" />
              <figcaption>
                <h2 className="course__title">{course.title}</h2>
                <button
                  type="button"
                  onClick={() => this.registerCourse(course.link)}
                >
                  과정 신청
                </button>
              </figcaption>
            </figure>
            <HeadlineSection
              className="course__goal"
              title="학습 목표"
              description={goal}
            />
            <HeadlineSection className="course__audience" title="수강 대상">
              <ul className="course__audience--list">
                {audienceTypes.map((type, index) => (
                  <li key={`audience-${index}`}>{htmlParser(type)}</li>
                ))}
              </ul>
            </HeadlineSection>
            <HeadlineSection
              className="course__price"
              title="수강료"
              // description={`블렌디드 러닝(6주) : 온라인(6주) + 오프라인(4주, 16H)<br><strong>575,000원</strong> (<abbr title="부가가치세(value added tax)">VAT</abbr> 포함)`}
              description={course.priceInfo || '......'}
            />
            <HeadlineSection className="course__schedule" title="강의 일정">
              <ul className="course__schedule--list">
                {scheduleTypes.map((schedule, index) => (
                  <li key={`schedule-${index}`}>{schedule}</li>
                ))}
              </ul>
            </HeadlineSection>
            <HeadlineSection
              className="course__online"
              title="온라인 강의"
              description={`블렌디드 러닝 오프라인 강의는 온라인 강의와 병행하여 진행됩니다. ${desc.online}`}
            >
              <img
                src={require('~/assets/courses/online-course@2x.png')}
                alt=""
              />
            </HeadlineSection>
            <HeadlineSection
              className="course__offline"
              title="오프라인 강의"
              description="블렌디드 러닝 오프라인 강의는 온라인 강의에서 학습한 내용을 복습하고, 활용하는 능력을 키울 수 있도록 실습하는 강의입니다."
            >
              <ul className="course__offline--list">
                {desc.offline.map((chapter, index) => (
                  // 컴파운드 컴포넌트 활용
                  <Course.Curiculum key={`chapter-${index}`} index={index}>
                    {chapter}
                  </Course.Curiculum>
                ))}
              </ul>
            </HeadlineSection>
            <HeadlineSection className="course__tutor" title="강사">
              <figure>
                <img
                  src={require(`~/assets/courses/tutor-${tutor.image}@2x.png`)}
                  alt=""
                />
                <figcaption>
                  <h3 className="course__tutor--name">{tutor.name}</h3>
                  <p className="course__tutor--bio">{htmlParser(tutor.bio)}</p>
                </figcaption>
              </figure>
            </HeadlineSection>
          </div>
        </div>
      </main>
    );
  }
}

export default withHelmet(
  connect(mapState)(Course),
  '과정 ↼ 이듬 블렌디드 러닝'
);
