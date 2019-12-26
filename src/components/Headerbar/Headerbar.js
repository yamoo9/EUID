import './Headerbar.sass';

import React, { Component } from 'react';

import HomeLink from '../HomeLink/HomeLink';
import ButtonGlobalNavigation from '../ButtonGlobalNavigation/ButtonGlobalNavigation';
import HeaderbarBGLine from '../HeaderbarBGLine/HeaderbarBGLine';
import GlobalNavigation from '../GlobalNavigation/GlobalNavigation';

/**
 * @class Headerbar
 * @summary 헤더바 컴포넌트
 */
class Headerbar extends Component {
	state = {
		gnbActive: false,
	};

	toggleMenu = () => {
		this.setState({
			gnbActive: !this.state.gnbActive,
		});
	};

	hideMenu = () => {
		this.setState({
			gnbActive: false,
		});
	};

	render() {
		const { gnbActive: active } = this.state;

		return (
			<header className="headerbar" role="banner">
				<div className="wrapper">
					<HomeLink />
					<ButtonGlobalNavigation
						handleClick={this.toggleMenu}
						isActive={active}
					/>
					<GlobalNavigation isActive={active} handleHideMenu={this.hideMenu} />
				</div>
				<HeaderbarBGLine duration="7000" />
			</header>
		);
	}
}

export default Headerbar;
