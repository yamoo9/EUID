import './HomeLink.sass';

import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '@assets/EUID-logo.svg';

/**
 * @class HomeLink
 * @summary 홈 링크 컴포넌트
 */
const HomeLink = () => {
	return (
		<h1 className="headerbar__homelink">
			<Link to="/" className="headerbar__homelink--link">
				<Logo className="headerbar__homelink--logo" />
			</Link>
		</h1>
	);
};
export default HomeLink;
