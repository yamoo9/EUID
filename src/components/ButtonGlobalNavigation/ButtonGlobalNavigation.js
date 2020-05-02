import './ButtonGlobalNavigation.sass';

import React from 'react';
import classNames from 'classnames';

// 에셋
import { ReactComponent as MenuIcon } from '~/assets/buttons/menu.svg';

/**
 * ButtonGlobalNavigation
 * @summary 글로벌 내베게이션 버튼 컴포넌트
 * @param {Object} props 전달 속성 (객체)
 */
const ButtonGlobalNavigation = ({
  label = '글로벌 내비게이션 열기',
  isActive = false,
  handleClick = null,
}) => {
  const classes = classNames({
    headerbar__menuButton: true,
    'is-active': isActive,
  });

  return (
    <button
      type="button"
      className={classes}
      onClick={handleClick}
      aria-label={label}
    >
      <MenuIcon className="headerbar__menuButton--icon" />
    </button>
  );
};

export default ButtonGlobalNavigation;
