import * as React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';

const ProfilePic = (props) => {
  const { height, width, ...rest } = props;

  return <S.ProfilePic height={height} {...rest} />;
};

ProfilePic.propTypes = {
  height: PropTypes.number,
};

ProfilePic.defaultProps = {
  height: 80,
};

export { ProfilePic };
