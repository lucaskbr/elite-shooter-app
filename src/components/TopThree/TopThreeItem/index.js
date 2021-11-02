import React from 'react';
import PropTypes from 'prop-types';

import { ProfilePic } from '@components/ProfilePic';

import crownPath from '@assets/crown.png';
import { S } from './style';

const TopThreeItem = (props) => {
  const { isFirst, data } = props;
  const { user } = data;
  const { username } = user;

  return (
    <S.TopThreeItem>
      {isFirst && <S.Crown source={crownPath} />}
      <ProfilePic username={username} />
      <S.Name>{username}</S.Name>
    </S.TopThreeItem>
  );
};

TopThreeItem.propTypes = {
  isFirst: PropTypes.bool,
  data: PropTypes.object.isRequired,
};

TopThreeItem.defaultProps = {};

export { TopThreeItem };
