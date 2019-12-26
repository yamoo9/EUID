import './FAQ.sass';

import React, { Fragment } from 'react';
import htmlParser from 'html-react-parser';

import { faqs } from '~/config/config';

import withHelmet from '@HOC/withHelmet';
import Catchphrase from '@components/Catchphrase/Catchphrase';

/**
 * @class FAQ
 * @summary FAQ 컴포넌트
 */
const FAQ = () => {
	return (
		<main id="FAQ" aria-labelledby="Catchphrase">
			<div className="wrapper">
				<Catchphrase shape="triangle">Frequently Asked Questions</Catchphrase>
			</div>
			<div className="wrapper illust">
				<dl className="QA">
					{faqs.map(({ id, question, answer }) => (
						<Fragment key={id}>
							<dt className="QA__question">Q {question}</dt>
							<dd className="QA__answer">{htmlParser(answer)}</dd>
						</Fragment>
					))}
				</dl>
			</div>
		</main>
	);
};

export default withHelmet(FAQ, 'FAQ ↼ 이듬 블렌디드 러닝');
