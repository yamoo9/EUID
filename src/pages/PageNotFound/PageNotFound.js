import './PageNotFound.sass';

import React from 'react';
import withHelmet from '@HOC/withHelmet';

/**
 * @class PageNotFound
 * @summary 접속 오류 페이지 컴포넌트
 */
const PageNotFound = () => {
	return (
		<div className="pageNotFound">
			<h1>페이지를 찾을 수 없습니다.</h1>
		</div>
	);
};

export default withHelmet(PageNotFound, '페이지가 없습니다 ↼ 이듬 블렌디드 러닝');
