import './Map.sass';
import React, { useEffect } from 'react';

// 설정 객체
const settings = {
  timestamp: '1643264823021',
  key: '28yzr',
  mapWidth: '380',
  mapHeight: '250',
};

/**
 * Map
 * @summary 맵 컴포넌트
 */
const Map = () => {
  // 사이드 이펙트
  useEffect(() => {
    if (window.daum) {
      new window.daum.roughmap.Lander(settings).render();
    }
  }, []);

  // 렌더링
  return (
    <div
      id="daumRoughmapContainer1643264823021"
      className="root_daum_roughmap root_daum_roughmap_landing"
    />
  );
};

export default Map;
