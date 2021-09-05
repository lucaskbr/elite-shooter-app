import React, { forwardRef } from 'react';
// import PropTypes from 'prop-types';

import { S } from './style';

const TextInput = forwardRef((props, ref) => {
  return <S.TextInput ref={ref} {...props} />;
});

// TextInput.propTypes = {};

// TextInput.defaultProps = {};

export { TextInput };
