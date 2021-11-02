import React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';

const Button = (props) => {
  const { text, type, ...rest } = props;

  return (
    <S.Button type={type} {...rest}>
      <S.ButtonText type={type}>{text}</S.ButtonText>
    </S.Button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'primary',
};

export { Button };
