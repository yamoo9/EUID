/**
 * 캐러셀 반응형 설정
 */
export const RWD_CAROUSEL_SETTINGS = {
	mobile: {
		breakpoint: { min: 0, max: 479 },
		items: 1,
		partialVisibilityGutter: 15,
	},
	tablet: {
		breakpoint: { min: 480, max: 760 },
		items: 2,
		partialVisibilityGutter: 15,
	},
	desktop: {
		breakpoint: { min: 761, max: 1119 },
		items: 3,
		partialVisibilityGutter: 5,
	},
	superLargeDesktop: {
		breakpoint: { min: 1200, max: 3000 },
		items: 4,
	},
};

/**
 * 오프닝 데이
 * 하이픈(-) 기호 필수!
 */
export const openingDay = '2020-01-18';

/**
 * 캠페인 리스트
 */
export const campaigns = [
	{
		id: 'campaign-01',
		image: 'campaign/campaign-illust-01.svg',
		message:
			'<b class="brandName"><span>이</span>듬</b> 블렌디드 러닝은<br>오직 수강생 발전에만 집중합니다.',
	},
	{
		id: 'campaign-02',
		image: 'campaign/campaign-illust-02.svg',
		message:
			'<b class="brandName"><span>이</span>듬</b>은 블렌디드 러닝을 표방합니다.<br>블렌디드 러닝이란? 온라인과 오프라인을 결합한 강의를 말합니다.',
	},
	{
		id: 'campaign-03',
		image: 'campaign/campaign-illust-03.svg',
		message:
			'<b class="brandName"><span>이</span>듬</b>은 수강생 모두가 만족할 수 있도록<br>개별 및 멘토링 시스템으로 운영됩니다.',
	},
	{
		id: 'campaign-04',
		image: 'campaign/campaign-illust-04.svg',
		message:
			'<b class="brandName"><span>이</span>듬</b>은 웹/앱 UI 디자인 및 개발에<br>관한 다양한 강의를 다루며 모든 강의는<br>웹 표준, 접근성, 사용성을 고려합니다.',
	},
	{
		id: 'campaign-05',
		image: 'campaign/campaign-illust-05.svg',
		message:
			'<b class="brandName"><span>이</span>듬</b>은 기술 교육을 넘어, 사람이<br>중심인 바른 교육을 지향합니다.',
	},
];

/**
 * 강의 카테고리 리스트
 */
export const courses = [
	{
		id: 'course-01',
		image: 'courses/course-illust-01.svg',
		path: 'ui-structure-design',
		title: 'UI Structure & Design',
		titleText: 'UI 구조 & 디자인 → HTML/CSS 웹표준, 접근성, 마크업, 레이아웃, 스타일링',
		description: '웹 기획자, 디자이너 또는 웹 개발을 시작하려는 이들에게 멋진 웹 세상을 안내합니다.',
		tags: '웹표준 접근성 HTML CSS 마크업 스타일링 레이아웃 애니메이션'.split(' '),
		details: {
			goal:
				'웹 디자인, 개발을 시작하는 이들을 위한 강의로 HTML, CSS 언어 기초 공부 및 올바르고 의미있는 구조 설계, 놀랍고 재미있는 레이아웃, 멋진 스타일링, 효과적인 애니메이션을 학습합니다.',
			audienceTypes: [
				'웹 디자인 또는 개발을 시작하려는 사람',
				'웹 디자인 시안을 웹 페이지로 만드는 학습이 필요한 사람',
				'탄탄한 구조 설계, 스타일링, 레이아웃 구현이 어려운 사람',
			],
			scheduleTypes: [
				'온라인 강의 : 수강 기간 중 언제든 자율 학습',
				'오프라인 강의 : 09:00 - 13:00 (토, 강남) 현장 학습',
			],
			courseDescription: {
				online:
					'<a href="https://yamoo9.github.io/front-end-master" target="_blank" rel="noreferrer noopener">온라인 강의 사이트</a>에서 JavaScript 언어 기초 문법과 웹 문서 접근, 조작을 위한 DOM API를 학습합니다.',
				offline: [
					// HTML 코드 사용 가능
					`커리큘럼 내용 작성 준비 중...`,
					`커리큘럼 내용 작성 준비 중...`,
					`커리큘럼 내용 작성 준비 중...`,
					`커리큘럼 내용 작성 준비 중...`,
				],
			},
			tutor: {
				name: '김데레사',
				image: 'deresa',
				// HTML 코드 사용 가능
				bio: `
					<a href="http://www.yes24.com/Product/goods/62278802" target="_blank" rel="noreferrer noopener">
					웹 표준 핵심 가이드 북 HTML5 + CSS3</a> 도서를 집필했으며, 현재 <strong>멀티 캠퍼스, 한국 생산성 본부 전임 교수</strong>로 재직 중입니다.
				`,
			},
		},
	},
	{
		id: 'course-02',
		image: 'courses/course-illust-02.svg',
		path: 'ui-interaction-junior',
		title: 'UI Interaction Junior',
		titleText: 'UI 인터랙션 주니어 → JavaScript, DOM 스크립팅, 이벤트 핸들링, UI 컴포넌트',
		description: '웹 퍼블리셔 또는 프론트엔드 개발자를 꿈꾸는 이들에게 인터랙션 디자인 세상으로 안내합니다.',
		tags: 'JavaScript DOM스크립트 이벤트핸들링 UI컴포넌트'.split(' '),
		details: {
			goal:
				'JavaScript를 시작하는 이들을 위한 강의로 프로그래밍 언어의 기초 공부와 HTML 문서 요소에 접근, 조작 또는 이벤트에 따라 제어하는 방법을 학습합니다.',
			audienceTypes: [
				'프로그래밍 언어를 시작하는 사람',
				'JavaScript를 활용해 인터랙션 하는 학습이 필요한 사람',
				'JavaScript를 학습했으나, 여전히 어려운 사람',
			],
			scheduleTypes: [
				'온라인 강의 : 수강 기간 중 언제든 자율 학습',
				'오프라인 강의 : 14:00 - 18:00 (토, 강남) 현장 학습',
			],
			courseDescription: {
				online:
					'<a href="">온라인 강의 사이트</a>에서 JavaScript 언어 기초 문법과 웹 문서 접근, 조작을 위한 DOM API를 학습합니다.',
				offline: [
					'JavaScript 기초 문법을 빠르게 정리하고, 학습한 범위 내에서 간단한 프로그래밍 실습을 진행합니다.',
					'JavaScript 함수, DOM API의 이벤트 등록/제거 및 문서 객체 접근, 조작 하는 방법을 활용해 사용자와 인터랙션 하는 UI 컴포넌트를 만드는 실습을 진행합니다.',
					'JavaScript 문, 식을 활용해 집합 데이터를 조건  또는 반복 처리하여 데이터를 활용해 프로그래밍 하는 UI 컴포넌트를 만들어 인터랙션 하는 실습을 진행합니다.',
					'JavaScript 타임 컨트롤을 사용해 애니메이션 하는 방법을 살펴보고, 웹 모션을 프로그래밍으로 제어하는 인터랙션 UI 컴포넌트를 제작하는 실습을 진행합니다.',
				],
			},
			tutor: {
				name: '야무',
				image: 'yamoo9',
				bio: `<a href="https://yamoo9.github.io/front-end-master" target="_blank" rel="noreferrer noopener">Front-End Master</a>, <a href="https://yamoo9.github.io/react-master" target="_blank" rel="noreferrer noopener">React Master</a> 온라인 영상 강의를 촬영했고, 오프라인 강의는 <strong>UI 인터랙션</strong>, <strong>React 프레임 워크</strong>를 맡아 진행합니다.`,
			},
		},
	},
	{
		id: 'course-03',
		image: 'courses/course-illust-03.svg',
		path: 'ui-interaction-senior',
		title: 'UI Interaction Senior',
		titleText: 'UI 인터랙션 시니어 → 객체 지향 JavaScript, ES6+, 비동기 프로그래밍, REST API',
		description: '시니어 웹 퍼블리셔, 프론트엔드 주니어 개발자에게 좀 더 깊은 프로그래밍 세상을 안내합니다.',
		tags: '객체지향프로그래밍 ES6+ AJAX REST_API'.split(' '),
		details: {
			goal: `JavaScript를 보다 심화적으로 학습하길 희망하는 이들을 위한 강의로 객체지향 JavaScript, ES6+, 비동기 프로그래밍(AJAX, Fetch API, Aynsc Function), REST API를 활용한 <a href="https://ko.wikipedia.org/wiki/CRUD" target="_blank" rel="noreferrer noopener"><abbr title="Create Read Update Delete">CRUD</abbr></a>등을 학습합니다.`,
			audienceTypes: [
				'JavaScript를 심화적으로 학습하려는 사람',
				'JavaScript를 사용해 객체 지향 프로그래밍 학습이 필요한 사람',
				'모던 JavaScript 프로그래밍(ES6+) 학습이 필요한 사람',
				'비동기 프로그래밍, REST API 활용 방법 학습이 필요한 사람',
			],
			scheduleTypes: [
				'온라인 강의 : 수강 기간 중 언제든 자율 학습',
				'오프라인 강의 : 09:00 - 13:00 (일, 강남) 현장 학습',
			],
			courseDescription: {
				online:
					'<a href="">온라인 강의 사이트</a>에서 JavaScript 언어 기초 문법과 웹 문서 접근, 조작을 위한 DOM API를 학습합니다.',
				offline: [
					'JavaScript 프로그래밍의 심화 부분(scope hoist, closure 등) 개념을 정리하고, 원리 및 작동 방식을 학습합니다.',
					'Prototype vs Class 기반 객체 지향 프로그래밍을 빠르게 정리하고, 학습한 범위 내에서 프로그래밍 실습을 진행합니다.',
					'사용성, 접근성(WCAG, WAI-ARIA)을 고려해 UI 컴포넌트(Carousel 등)를 제작(Class 객체 지향 프로그래밍 활용)합니다.',
					'비동기 프로그래밍을 활용하여 REST API 서버와 통신하여 데이터 읽기, 쓰기, 수정, 제거하는 방법 등을 학습합니다.',
				],
			},
			tutor: {
				name: '야무',
				image: 'yamoo9',
				bio: `<a href="https://yamoo9.github.io/front-end-master" target="_blank" rel="noreferrer noopener">Front-End Master</a>, <a href="https://yamoo9.github.io/react-master" target="_blank" rel="noreferrer noopener">React Master</a> 온라인 영상 강의를 촬영했고, 오프라인 강의는 <strong>UI 인터랙션</strong>, <strong>React 프레임 워크</strong>를 맡아 진행합니다.`,
			},
		},
	},
	{
		id: 'course-04',
		image: 'courses/course-illust-04.svg',
		path: 'react-framework',
		title: 'React Framework',
		titleText:
			'React 프레임워크 → React, Redux, React Router, Styled Components, Firebase',
		description: 'React와 같은 프레임워크를 학습하려는 이들에게 모던 웹 개발 패러다임 세상을 안내합니다.',
		tags: 'React Redux ReactRouter StyledComponents Firebase'.split(' '),
		details: {
			goal:
				'Front-End Framework를 시작하는 이들을 위한 강의로 React 프로그래밍에 대해 학습합니다. (React, Redux, React Router, Styled Components 등)',
			audienceTypes: [
				'Front-End 프레임워크 학습이 필요한 사람',
				'React 프레임워크를 활용한 서비스 개발 학습이 필요한 사람',
				'싱글 페이지 앱(<a href="https://yamoo9.github.io/react-master/lecture/rr-spa.html" target="_blank" rel="noopener noreferrer">SPA</a>) 학습이 필요한 사람',
			],
			scheduleTypes: [
				'온라인 강의 : 수강 기간 중 언제든 자율 학습',
				'오프라인 강의 : 14:00 - 18:00 (일, 강남) 현장 학습',
			],
			courseDescription: {
				online:
					'<a href="https://yamoo9.github.io/react-master" target="_blank" rel="noreferrer noopener">온라인 강의 사이트</a>에서 React 프로그래밍(React, Redux, React Router, Styled Component)을 학습합니다.',
				offline: [
					'React 프로젝트에 필요한 환경구성(예: craco, jsconfig 등)을 추가한 후, UI 디자인을 분석하여 React 컴포넌트로 작성합니다.',
					'React Router를 사용해 각 UI 페이지 별 라우팅을 구성합니다. 라우트(Route)를 통해 전달되는 매개변수(Parameters)에 따라 동적으로 구성되는 페이지 컴포넌트 처리 방법을 학습합니다.',
					'Redux, React Redux를 사용해 컴포넌트의 상태 데이터를 통합 관리하도록 구성하고 활용하는 방법을 학습합니다.',
					'코드 리팩토링 및 최적화 과정을 거쳐 제작한 결과물을 서버에 배포, 호스팅하는 방법을 학습합니다.',
				],
			},
			tutor: {
				name: '야무',
				image: 'yamoo9',
				bio: `<a href="https://yamoo9.github.io/front-end-master" target="_blank" rel="noreferrer noopener">Front-End Master</a>, <a href="https://yamoo9.github.io/react-master" target="_blank" rel="noreferrer noopener">React Master</a> 온라인 영상 강의를 촬영했고, 오프라인 강의는 <strong>UI 인터랙션</strong>, <strong>React 프레임 워크</strong>를 맡아 진행합니다.`,
			},
		},
	},
];

/**
 * 쇼케이스 리스트
 */
export const showcases = [
	{
		id: 'showcase-01',
		title: 'Cross Direction Carousel',
		description: '양 방향(↑/↓) 슬라이딩 되며 화면에 표시되는 캐러셀 UI 컴포넌트 디자인',
		link: 'https://yamoo9.github.io/CDC/',
		image: 'home/showcase/CDC@2x.jpg',
	},
	{
		id: 'showcase-02',
		title: 'Video Opening Animation',
		description: '비디오 재생과 동시에 회전, 크기 애니메이션 되며 화면을 가득 채우는 UI 디자인',
		link: 'https://yamoo9.github.io/FVOA/',
		image: 'home/showcase/FVOA@2x.jpg',
	},
	{
		id: 'showcase-03',
		title: 'Transition & Custom Coursor',
		description: '페이지 트랜지션 시 광고 페이지를 보여주며, 커스텀 커서 UI 인터랙션 디자인',
		link: 'https://yamoo9.github.io/TCCA/',
		image: 'home/showcase/TCCA@2x.jpg',
	},
	{
		id: 'showcase-04',
		title: 'FEML 2019 Microsite',
		description: 'Front-End Masters League 2019<br>블렌디드 러닝 모집 마이크로 사이트',
		link: 'https://yamoo9.github.io/',
		image: 'home/showcase/FEML@2x.jpg',
	},
];

/**
 * 강의 리뷰 리스트
 */
export const reviews = [
	{
		id: 'review-01',
		rating: 4,
		title: '확실한건 돈은 전혀<br>아깝지 않았습니다.',
		comment: '아! 만드는 과제 더 내주셨으면 좋았을 것 같았습니다. 그럼 다음에 또 찾아 뵙겠습니다.',
		reviewer: '김재O 님',
	},
	{
		id: 'review-02',
		rating: 5,
		title: '굉장히 만족스러운<br>한 달이었습니다.',
		comment:
			'관리해주는 사람이 없으면 학습을 진행하기 어려웠는데 블렌디드 러닝이라는 게 있다는 것을 알아 전반적으로 만족스러웠습니다.',
		reviewer: '최유O 님',
	},
	{
		id: 'review-03',
		rating: 3,
		title: '수업은 좋았으나,<br>시간이 부족...',
		comment:
			'전달하고 싶은 내용이 더 있는데 시간관계상 빠르게 종결한 느낌이라 시간이 여유있었다면 더 얻어가는게 많지 않았을까? 싶습니다.',
		reviewer: '정주O 님',
	},
	{
		id: 'review-04',
		rating: 5,
		title: '수업이 더더더더!<br>길었으면 하는 생각',
		comment:
			'강의 가격은 낮추지 마세요. 오프라인 수업 시간을 한 시간 정도 늘리면 좋겠다는 생각인데, 시간을 늘리면 강의료를 올려도 좋습니다!!',
		reviewer: '김동O 님',
	},
	{
		id: 'review-05',
		rating: 4,
		title: '온라인 강의만으로 만족하기 어렵다.',
		comment: '배우는 범위가 넓어서 주간에 들어야 할 온라인 강의가 많았지만, 공부한 만큼 오프라인 강의에서 효과가 있습니다.',
		reviewer: '박의O 님',
	},
];

/**
 * 연간 일정 리스트
 */
export const schedules = [
	{
		id: 'schedule-01',
		openDate: '01 . 18',
		individuals: [
			'02 . 01 / 02',
			'02 . 08 / 09',
			'02 . 15 / 16',
			'02 . 22 / 23',
		],
	},
	{
		id: 'schedule-02',
		openDate: '03 . 14',
		individuals: [
			'03 . 28 / 29',
			'04 . 04 / 05',
			'04 . 11 / 12',
			'04 . 18 / 19',
		],
	},
	{
		id: 'schedule-03',
		openDate: '04 . 25',
		individuals: [
			'05 . 09 / 10',
			'05 . 16 / 17',
			'05 . 23 / 24',
			'05 . 30 / 31',
		],
	},
	{
		id: 'schedule-04',
		openDate: '06 . 20',
		individuals: [
			'07 . 04 / 05',
			'07 . 11 / 12',
			'07 . 18 / 19',
			'07 . 25 / 26',
		],
	},
	{
		id: 'schedule-05',
		openDate: '08 . 08',
		individuals: [
			'08 . 22 / 23',
			'08 . 29 / 30',
			'09 . 05 / 06',
			'09 . 12 / 13',
		],
	},
	{
		id: 'schedule-06',
		openDate: '10 . 17',
		individuals: [
			'10 . 31 / 11 . 01',
			'11 . 07 / 08',
			'11 . 14 / 15',
			'11 . 21 / 22',
		],
	},
];

/**
 * FAQ 리스트
 */
export const faqs = [
	{
		id: 'faq-01',
		question: '강의 일정은 어디서 확인하나요?',
		answer: `<a href="/schedule">연간 일정 페이지</a>에서 확인할 수 있으며, "이듬" 블렌디드 러닝은 <strong>연간 6회 진행</strong>됩니다.`,
	},
	{
		id: 'faq-02',
		question: '강의 비용은 얼마인가요?',
		answer: `현재 진행되는 강의는 모두 동일한 가격으로 책정되어 있습니다. 각 과정을 수강료는 <strong>49만원</strong>(현장 카드 결제 or 송금)입니다.`,
	},
	{
		id: 'faq-03',
		question: '강의장은 어디에 있나요?',
		answer: `블렌디드 러닝 온라인 강의는 어디서나 언제든 시청 가능합니다. 오프라인 강의는 <strong>ILIT 강의장</strong>(강남역)에서 진행됩니다.`,
	},
	{
		id: 'faq-04',
		question: '별도의 할인 정책이 있나요?',
		answer: `<strong>기수강생(유효기간 1년)의 경우, 5% 할인</strong>된 수강료로 강의를 수강할 수 있습니다. 할인을 희망하는 기수강생은 문의 후, 할인된 금액으로 결제합니다.`,
	},
	{
		id: 'faq-05',
		question: '온라인 강의만 신청 가능한가요?',
		answer: `온라인 강의만 신청할 경우, <a href="http://bit.ly/35TTly8" target="_blank" rel="noreferrer noopener">온라인 강의 사이트</a> 결제 정보를 참고하여 결제하면 확인 후 처리해드립니다. 처리가 완료되면 언제, 어디서나 강의를 시청하실 수 있습니다.`,
	},
	{
		id: 'faq-06',
		question: '강의 2개를 동시에 들어도 되나요?',
		answer: `<strong>권장하지 않습니다.</strong> 시간을 아껴 효율적으로 활용하기 위해 동시에 과정 수강을 문의주시는 분들이 종종 있습니다만, 가급적 거절하고 있습니다. 한 강의를 선택하여 집중하길 권합니다.`,
	},
	{
		id: 'faq-07',
		question: '강사와 직접 상담 가능한가요?',
		answer: `<strong>네. 가능합니다.</strong> 각 강의에서 진행하는 내용 또는 강의 스타일, 강의 목표, 수강 적합성 등 궁금한 점이 있다면? <a href="tel:010-9814-1461">010-9814-1461</a>로 연락주세요. 함께 고민하고 긍정적인 방향을 모색해봅니다.`,
	},
];

/**
 * 글로벌 내비게이션 라우트 설정
 */
export const navigationList = {
	home: '/',
	about: '/about',
	course: {
		route: '/course/:courseName',
		children: courses,
	},
	schedule: '/schedule',
	learningGuide: '/learning-guide',
	privacyPolicy: '/privacy-policy',
	brandStory: '/brand-story',
	faq: '/FAQ',
};
