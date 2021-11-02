import React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';

const ProfilePic = (props) => {
  const { username, height, width, ...rest } = props;

  return <S.ProfilePic height={height} source={{ uri: `https://robohash.org/${username}?set=set2` }} {...rest} />;
};

ProfilePic.propTypes = {
  height: PropTypes.number,
};

ProfilePic.defaultProps = {
  height: 80,
};

export { ProfilePic };
