import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

/**
 * HomeLink
 * @summary 홈 링크 컴포넌트
 * @reference https://stackoverflow.com/a/49439893
 */
const LinkButton = ({
  children,
  history,
  location,
  match,
  staticContext,
  to,
  onClick,
  ...attrs
}) => (
  <button
    type="button"
    {...attrs}
    onClick={(e) => {
      onClick && onClick(e);
      history.push(to);
    }}
  >
    {children}
  </button>
);

// 전달 속성 검사 설정
LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default withRouter(LinkButton);
