import * as React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';

const Separator = (props) => {
  const { children, height, paddingVertical, paddingHorizontal } = props;

  return (
    <S.Separator
      height={height}
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}
    >
      {children}
    </S.Separator>
  );
};

Separator.propTypes = {
  children: PropTypes.node,
  paddingVertical: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  height: PropTypes.number,
};

Separator.defaultProps = {};

Separator.defaultProps = {};

export { Separator };
