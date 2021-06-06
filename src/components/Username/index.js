import * as React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';

const Username = (props) => {
  const { text } = props;

  return <S.Username>{text}</S.Username>;
};

Username.propTypes = {
  text: PropTypes.string.isRequired,
};

Username.defaultProps = {};

export { Username };
