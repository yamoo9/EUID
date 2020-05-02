import './PageNotFound.scss';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import withHelmet from '~/HOC/withHelmet';

// 에셋
import brokenLinkPath from '~/assets/broken-link.png';
import { Link } from 'react-router-dom';

/**
 * @class PageNotFound
 * @summary 접속 오류 페이지 컴포넌트
 */
const PageNotFound = () => {
  // 사이드 이펙트
  useEffect(() => {
    // jQuery 라이브러리 호출
    const loadJquery = new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://code.jquery.com/jquery-3.5.0.slim.min.js';
      document.head.appendChild(script);
      script.addEventListener('load', () => resolve(window.jQuery));
    });
    // jGravity 라이브러리 호출 함수
    const loadJgravity = new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = '//bit.ly/jGravity';
      document.head.appendChild(script);
      script.addEventListener('load', () => resolve());
    });

    // jQuery, jGravigy 라이브러리가 모두 호출되면
    Promise.all([ loadJquery, loadJgravity ]).then(([ $ /* jQuery */ ]) => {
      const pageNotFound = $('#pageNotFound');
      const hButton = $('.hButton');
      const glitch = $('.glitch');
      const balls = $('.ball');
      const target = 'span, img';

      const handleGravity = () => {
        $.each(balls, (index) => {
          balls.eq(index).css('font-size', index * 30 + 40);
        });
        glitch.find('span').unwrap();
        $(target).css('cursor', 'move');
        hButton.css('display', 'none');

        pageNotFound.jGravity({
          target,
          ignoreClass: 'dontMove',
          weight: 20,
          depth: 100,
          drag: true,
        });
      };

      hButton.on('click', handleGravity);
    });
  }, []);

  // 렌더링
  return createPortal(
    <main id="pageNotFound">
      <div className="wrapper">
        <div className="h404" aria-label="404 Page Not Found">
          <img src={brokenLinkPath} alt="" className="hImg" />
          <span className="glitch" data-text="404">
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </span>
        </div>
        <h1>
          <span>페</span>
          <span>이</span>
          <span>지</span>
          <span>를</span>
          <span> </span>
          <span>찾</span>
          <span>을</span>
          <span> </span>
          <span>수</span>
          <span> </span>
          <span>없</span>
          <span>습</span>
          <span>니</span>
          <span>다</span>
          <span>.</span>
          <span> </span>
          <span className="ball" aria-hidden="true">
            🎾
          </span>
          <span> </span>
          <span className="ball" aria-hidden="true">
            ⚽
          </span>
          <span> </span>
          <span className="ball" aria-hidden="true">
            🏈
          </span>
        </h1>
        <button className="hButton">
          &lt;<b>Gravity</b> class="<b>active</b>" /&gt;
        </button>
        <Link to="/">
          <i aria-hidden="true">🏠</i> 홈 페이지로 이동
        </Link>
      </div>
    </main>,
    document.body
  );
};

export default withHelmet(PageNotFound, '페이지가 없습니다 ↼ 이듬 블렌디드 러닝');
