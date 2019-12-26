import './ButtonGlobalNavigation.sass';

import React from 'react';
import classNames from 'classnames';
import { ReactComponent as MenuIcon } from '@assets/buttons/menu.svg';

const ButtonGlobalNavigation = ({ isActive, handleClick }) => {
	const classes = classNames({
		headerbar__menuButton: true,
		'is-active': isActive,
	});
	return (
		<button type="button" className={classes} onClick={handleClick}>
			<MenuIcon className="headerbar__menuButton--icon" />
		</button>
	);
};

export default ButtonGlobalNavigation;
