import './BrandStory.sass';
import React from 'react';

// HOC 컴포넌트 추출
import { withHelmet } from '~/HOC';

// 컴포넌트 추출
import { Catchphrase, HeadlineSection } from '~/components';

// 에셋
import aboutBrandImagePath from '~/assets/brand-story/about-brand@2x.png';

/**
 * @class BrandStory
 * @summary 브랜드 이야기 페이지 컴포넌트
 */
const BrandStory = () => (
  <main id="brandStory" aria-labelledby="Catchphrase">
    <div className="wrapper">
      <Catchphrase shape="triangle">Brand Story</Catchphrase>
    </div>
    <div className="wrapper brand-area">
      <HeadlineSection
        title="브랜드 이야기"
        description="&quot;이듬&quot;은 우리 말로 <strong>&quot;다음&quot;</strong>을 의미합니다. 다음을 기약하며 나아가는 능동적이고 긍정적인 의미를 브랜드에 담고자 <strong>&quot;듬&quot;</strong> 단어를 뉘어 <strong>UID (User Interface Development)</strong>로 풀어내고, <strong>교육(Education)</strong>을 포함한 다양한 의미를 형상화 한 영문 <strong>E</strong>와 조합하여 브랜드 로고를 제작하였습니다."
      />
      <div className="brand-desc">
        <img className="about-brand" src={aboutBrandImagePath} alt="" />
        <p className="meaning-e">
          <span className="colorful">E</span>ducation<br />
          <span className="colorful">E</span>ssential<br />
          <span className="colorful">E</span>xperience<br />
          <span className="colorful">E</span>xpression<br />
          <span className="colorful">E</span>ffective<br />
          <span className="colorful">E</span>xercise<br />
          <span className="colorful">E</span>nable<br />
          <span className="colorful">E</span>xpert<br />
          <span className="colorful">E</span>nough<br />
          <span className="colorful">E</span>quality<br />
          <span className="colorful">E</span>quantity<br />
          <span className="colorful">E</span>nvironment<br />
          .<br />
          .<br />
          .
        </p>
      </div>
    </div>
  </main>
);

export default withHelmet(BrandStory, '브랜드 이야기 ↼ 이듬 블렌디드 러닝');
