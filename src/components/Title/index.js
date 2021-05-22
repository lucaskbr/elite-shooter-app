import * as React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';

const Title = (props) => {
  const { text } = props;

  return <S.Title>{text}</S.Title>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

Title.defaultProps = {};

export { Title };
