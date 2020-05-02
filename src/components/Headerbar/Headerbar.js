import './Headerbar.sass';
import React, { Component } from 'react';

// 컴포넌트 추출
import {
  HomeLink,
  ButtonGlobalNavigation,
  GlobalNavigation,
  HeaderbarBGLine,
} from '~/components';

/**
 * Headerbar
 * @summary 헤더바 컴포넌트
 */
class Headerbar extends Component {
  // 상태
  state = {
    gnbActive: false,
  };

  // 메뉴 토글 핸들러
  handleToggleMenu = () => {
    this.setState({
      gnbActive: !this.state.gnbActive,
    });
  };

  // 메뉴 감춤 핸들러
  handleHideMenu = () => {
    this.setState({
      gnbActive: false,
    });
  };

  // 렌더링
  render() {
    // 상태 추출 및 별칭 설정
    const { gnbActive: active } = this.state;

    return (
      <header className="headerbar" role="banner">
        <div className="wrapper">
          {/* 홈 링크 */}
          <HomeLink
            label="이듬(E.UID) 블렌디드 러닝"
            handleHideMenu={this.handleHideMenu}
          />

          {/* 글로벌 내비게이션 열기 버튼 */}
          <ButtonGlobalNavigation
            handleClick={this.handleToggleMenu}
            isActive={active}
          />

          {/* 글로벌 내비게이션 */}
          <GlobalNavigation
            isActive={active}
            handleHideMenu={this.handleHideMenu}
          />
        </div>
        {/* 헤더바 배경 라인 */}
        <HeaderbarBGLine duration="7000" />
      </header>
    );
  }
}

export default Headerbar;
