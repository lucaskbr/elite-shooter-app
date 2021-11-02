import React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';

const InputGroup = (props) => {
  const { children } = props;

  return <S.InputGroup>{children}</S.InputGroup>;
};

InputGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

InputGroup.defaultProps = {};

export { InputGroup };
