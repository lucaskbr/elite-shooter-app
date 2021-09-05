import * as React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';
import { ProfilePic } from '../ProfilePic';
import { Username } from '../Username';

const ProfileInfo = (props) => {
  const { username, logout, handleLogout } = props;

  return (
    <S.ProfileInfo>
      <ProfilePic username={username} />
      <Username text={username} />
      {logout && handleLogout && <S.Logout onPress={handleLogout}>Deslogar</S.Logout>}
    </S.ProfileInfo>
  );
};


export { ProfileInfo };
