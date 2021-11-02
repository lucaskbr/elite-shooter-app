import React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';

const Label = (props) => {
  const { text } = props;

  return <S.Label>{text}</S.Label>;
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
};

Label.defaultProps = {};

export { Label };
