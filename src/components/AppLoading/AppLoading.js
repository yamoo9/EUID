import styles from './AppLoading.module.scss'
import React from 'react';
import spinnerPath from '~/assets/hud.spinner.svg';

/**
 * AppLoading
 * @summary 앱 로딩 스피너 컴포넌트
 */
const AppLoading = () => {
  return (
    <div className={styles.loadingPage}>
      <img className={styles.spinner} src={spinnerPath} alt="" />
      이듬(E.UID) 웹 사이트를 로딩 중입니다......
    </div>
  );
};

export default AppLoading;
