import './GlobalNavigation.sass';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

// 유틸리티 함수 추출
import { scrollIntoView, focusingTarget } from '~/utils';

/**
 * GlobalNavigation
 * @summary 글로벌 내비게이션 컴포넌트
 * @param {Object} props 전달 속성 (객체)
 */
const GlobalNavigation = ({ isActive, handleHideMenu }) => {
  // 스토어 상태 추출
  const {
    about,
    course,
    schedule,
    learningGuide,
    privacyPolicy,
    brandStory,
    faq,
  } = useSelector(({ euid }) => euid.json.navigationList);

  // 참조
  const courseLink = useRef(null);

  // 상태
  const [ submenuOpened, setSubmenuOpen ] = useState(false);

  // 사이드 이펙트
  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (courseLink.current === e.target) return;
      setSubmenuOpen(false);
    });
  }, []);

  // 클래스 속성 설정
  const classes = classNames({
    globalNavigation__menu: true,
    'is-active': isActive,
  });

  // 서브 메뉴 클래스 속성 설정
  const submenuClasses = classNames({
    'depth-2': true,
    'is-active': submenuOpened,
  });

  // 서브 메뉴 버튼 클래스 속성 설정
  const buttonSubmenuClasses = classNames({
    'globalNavigation__menu--toggleButton': true,
    'is-toggled': submenuOpened,
  });

  // 핸들러
  const hideMenu = useCallback(
    () => {
      setSubmenuOpen(false);
      handleHideMenu();
      focusingTarget(document.querySelector('main'));
      scrollIntoView({ behavior: 'auto' });
    },
    [ handleHideMenu ]
  );

  // 자식 개수
  let childrenCount = course.children.length;

  // 렌더링
  return (
    <nav className={classes}>
      <ul>
        <li>
          <NavLink activeClassName="is-active" to={about} onClick={hideMenu}>
            소개
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="is-active"
            ref={courseLink}
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
            {course &&
              course.children.map((child, index) => (
                <li key={child.id}>
                  <NavLink
                    activeClassName="is-active"
                    to={{
                      pathname: `/courses/${child.path}`,
                      state: {
                        course: child,
                      },
                    }}
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
