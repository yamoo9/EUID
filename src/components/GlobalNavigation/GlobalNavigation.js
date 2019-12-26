import './GlobalNavigation.sass';

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { navigationList } from '~/config/config';

import scrollIntoView from '@utils/scrollIntoView';
import focusingTarget from '@utils/focusingTarget';

/**
 * @class GlobalNavigation
 * @summary 글로벌 내비게이션 컴포넌트
 * @param {Object} props 부모 컴포넌트 전달 속성(들)
 */
const GlobalNavigation = ({ isActive, handleHideMenu }) => {
	const [
		submenuOpened,
		setSubmenuOpen,
	] = useState(false);

	const {
		home,
		about,
		course,
		schedule,
		learningGuide,
		privacyPolicy,
		brandStory,
		faq,
	} = navigationList;

	const classes = classNames({
		globalNavigation__menu: true,
		'is-active': isActive,
	});

	const submenuClasses = classNames({
		'depth-2': true,
		'is-active': submenuOpened,
	});

	const buttonSubmenuClasses = classNames({
		'globalNavigation__menu--toggleButton': true,
		'is-toggled': submenuOpened,
	});

	const hideMenu = () => {
		setSubmenuOpen(false);
		handleHideMenu();
		focusingTarget(document.querySelector('main'));
		scrollIntoView();
	};

	let childrenCount = course.children.length;

	return (
		<nav className={classes}>
			<ul>
				<li>
					<NavLink
						activeClassName="is-active"
						exact
						to={home}
						onClick={hideMenu}
					>
						홈
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="is-active" to={about} onClick={hideMenu}>
						소개
					</NavLink>
				</li>
				<li>
					<NavLink
						role="button"
						to="/course#toggle"
						className={buttonSubmenuClasses}
						onClick={(e) => {
							e.preventDefault();
							setSubmenuOpen(!submenuOpened);
						}}
					>
						과정 <span className="icon-arrow">&#xE001;</span>
					</NavLink>
					<ul className={submenuClasses}>
						{course.children.map((child, index) => (
							<li key={child.id}>
								<NavLink
									to={{
										pathname: `/course/${child.path}`,
										course: child,
									}}
									activeClassName="is-active"
									onClick={hideMenu}
									onBlur={() => {
										if (childrenCount - 1 === index) {
											setSubmenuOpen(false);
											handleHideMenu();
										}
									}}
									title={child.titleText}
								>
									{child.title}
								</NavLink>
							</li>
						))}
					</ul>
				</li>
				<li>
					<NavLink activeClassName="is-active" to={schedule} onClick={hideMenu}>
						연간 일정
					</NavLink>
				</li>
				<li>
					<NavLink
						activeClassName="is-active"
						to={learningGuide}
						onClick={hideMenu}
					>
						학습 안내
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="is-active" to={faq} onClick={hideMenu}>
						<abbr title="Frequently Asked Questions">FAQ</abbr>
					</NavLink>
				</li>
				<li>
					<NavLink
						activeClassName="is-active"
						to={brandStory}
						onClick={hideMenu}
					>
						브랜드 이야기
					</NavLink>
				</li>
				<li>
					<NavLink
						activeClassName="is-active"
						to={privacyPolicy}
						onClick={hideMenu}
					>
						정책 / 환불 규정
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default GlobalNavigation;
