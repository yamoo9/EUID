import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { navigationList } from '~/config/config';

import SkipToContent from '@components/SkipToContent/SkipToContent';
import GoToTop from '@components/GoToTop/GoToTop';
import Headerbar from '@components/Headerbar/Headerbar';
import Footerbar from '@components/Footerbar/Footerbar';

import Home from '@pages/Home/Home';
import About from '@pages/About/About';
import Course from '@pages/Course/Course';
import Schedule from '@pages/Schedule/Schedule';
import LearningGuide from '@pages/LearningGuide/LearningGuide';
import PrivacyPolicy from '@pages/PrivacyPolicy/PrivacyPolicy';
import BrandStory from '@pages/BrandStory/BrandStory';
import PageNotFound from '@pages/PageNotFound/PageNotFound';
import FAQ from '@pages/FAQ/FAQ';

const {
  home,
  about,
  course,
  schedule,
  learningGuide,
  privacyPolicy,
  brandStory,
  faq,
} = navigationList;

const App = () => {
  return (
    <Fragment>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <SkipToContent />
        <Headerbar />
        <Switch>
          <Route path={home} component={Home} exact />
          <Route path={about} component={About} exact />
          <Route path={course.route} component={Course} exact />
          <Route path={schedule} component={Schedule} exact />
          <Route path={learningGuide} component={LearningGuide} exact />
          <Route path={privacyPolicy} component={PrivacyPolicy} exact />
          <Route path={brandStory} component={BrandStory} exact />
          <Route path={faq} component={FAQ} exact />
          <Route component={PageNotFound} />
        </Switch>
        <GoToTop />
        <Footerbar />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
