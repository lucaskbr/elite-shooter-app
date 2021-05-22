import * as React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';

const ScreenContainer = (props) => {
  const { children, paddingVertical, paddingHorizontal } = props;

  return (
    <S.ScreenContainer
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}
    >
      {children}
    </S.ScreenContainer>
  );
};

ScreenContainer.propTypes = {
  children: PropTypes.node.isRequired,
  paddingVertical: PropTypes.number,
  paddingHorizontal: PropTypes.number,
};

ScreenContainer.defaultProps = {
  paddingVertical: 0,
  paddingHorizontal: 0,
};

ScreenContainer.defaultProps = {};

export { ScreenContainer };
