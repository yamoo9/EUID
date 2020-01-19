import './Course.sass';

import React, { Component } from 'react';
import htmlParser from 'html-react-parser';
import withHelmet from '@HOC/withHelmet';
import Catchphrase from '@components/Catchphrase/Catchphrase';
import HeadlineSection from '@components/HeadlineSection/HeadlineSection';

/**
 * @class Course
 * @summary 과정 페이지 컴포넌트
 */
class Course extends Component {
	constructor(props) {
		super(props);
		let initialState = {};
		const courseProp = props.location.course;
		if (courseProp) {
			initialState.course = courseProp;
		}
		else {
			this.fetchCourse();
		}
		this.state = initialState;
	}

	static Curiculum = ({ index, children: chapter }) => (
		<li>
			<h3>{index + 1}주차</h3>
			<p>{htmlParser(chapter)}</p>
		</li>
	);

	fetchCourse = async () => {
		const courses = (await require('~/config/config')).courses;
		const course = courses.find(
			(course) => course.path === this.props.match.params.courseName
		);
		this.setState({
			course,
		});
	};

	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.match.params.courseName !== nextState.course.path) {
			// 다른 경로일 경우만 상태 업데이트
			this.fetchCourse();
		}
		return true;
	}

	registerCourse = () => {
		window.location.assign('https://forms.gle/jtSsGEtw7Gy2AELW9');
	};

	render() {
		const { course } = this.state;
		const {
			goal,
			audienceTypes,
			scheduleTypes,
			courseDescription: desc,
			tutor,
		} =
			(course && course.details) || {};
		const courseImagePath = course && require(`../../assets/${course.image}`);

		return !course ? null : (
			<main id="course">
				<div className="wrapper course">
					<Catchphrase shape="triangle">Course Description</Catchphrase>
					<div className="course__container">
						<figure className="course__main">
							<img src={courseImagePath} alt="" />
							<figcaption>
								<h2 className="course__title">{course.title}</h2>
								<button type="button" onClick={() => this.registerCourse()}>
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
							description="블렌디드 러닝(4주) : 온라인 강의 + 오프라인 강의(16H)<br><strong>49만원</strong>(현장 카드 결제 / 카카오톡 송금 가능)"
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
								src={require('../../assets/courses/online-course@2x.png')}
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
									<Course.Curiculum key={`chapter-${index}`} index={index}>
										{chapter}
									</Course.Curiculum>
								))}
							</ul>
						</HeadlineSection>
						<HeadlineSection className="course__tutor" title="강사">
							<figure>
								<img
									src={require(`../../assets/courses/tutor-${tutor.image}@2x.png`)}
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

export default withHelmet(Course, '과정 ↼ 이듬 블렌디드 러닝');
