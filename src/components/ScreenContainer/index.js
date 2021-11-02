import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';

import { S } from './style';

const ScreenContainer = (props) => {
  const {
    children,
    backgroundColor,
    paddingVertical,
    paddingHorizontal,
    statusBarColor,
    statusBarStyle,
    ...rest
  } = props;

  return (
    <S.ScreenContainer
      backgroundColor={backgroundColor}
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}
      {...rest}
    >
      <StatusBar backgroundColor={statusBarColor} barStyle={statusBarStyle} />
      {children}
    </S.ScreenContainer>
  );
};

ScreenContainer.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  paddingVertical: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  statusBarColor: PropTypes.string,
  statusBarStyle: PropTypes.string,
};

ScreenContainer.defaultProps = {
  paddingVertical: 0,
  paddingHorizontal: 0,
  statusBarColor: '#FFF',
  barStyle: 'default',
};

export { ScreenContainer };
