import * as React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';

const Separator = (props) => {
  const {
    children,
    height,
    backgroundColor,
    marginVertical,
    paddingVertical,
    paddingHorizontal,
  } = props;

  return (
    <S.Separator
      height={height}
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}
      marginVertical={marginVertical}
      backgroundColor={backgroundColor}
    >
      {children}
    </S.Separator>
  );
};

Separator.propTypes = {
  children: PropTypes.node,
  paddingVertical: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  marginVertical: PropTypes.number,
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
};

Separator.defaultProps = {};

export { Separator };
