import './Map.sass';
import React, { useEffect } from 'react';

// 설정 객체
const settings = {
  timestamp: '1576734800416',
  key: 'wbh2',
  mapWidth: '360',
  mapHeight: '300',
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
      id="daumRoughmapContainer1576734800416"
      className="root_daum_roughmap root_daum_roughmap_landing"
    />
  );
};

export default Map;
