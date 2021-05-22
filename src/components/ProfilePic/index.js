import * as React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';

const ProfilePic = (props) => {
  const { height, width, ...rest } = props;

  return <S.ProfilePic height={height} width={width} {...rest} />;
};

ProfilePic.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

ProfilePic.defaultProps = {
  height: '100px',
  width: '100px',
};

export { ProfilePic };
