import './LinkMapImage.sass';
import React from 'react';

// 에셋
import map from '~/assets/home/map.jpg';

/**
 * LinkMapImage
 * @summary 맵 링크 이미지
 */
const LinkMapImage = () => (
  <a
    className="linkMapImage"
    href="http://kko.to/1brs4lujo"
    rel="noopener noreferrer"
    target="_blank"
  >
    <img src={map} alt="'길 찾기' Kakao 지도로 이동" />
  </a>
);

export default LinkMapImage;
