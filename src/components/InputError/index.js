import React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';

const InputError = (props) => {
  const { text } = props;

  return <S.InputError>{text}</S.InputError>;
};

InputError.propTypes = {
  text: PropTypes.string.isRequired,
};

InputError.defaultProps = {};

export { InputError };
