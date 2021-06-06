import * as React from 'react';
// import PropTypes from 'prop-types';

import { S } from './style';

const TextInput = (props) => {

  const { ...rest } = props;

  return (
    <S.TextInput {...rest} />
  )
};

// TextInput.propTypes = {};

// TextInput.defaultProps = {};

export { TextInput };
