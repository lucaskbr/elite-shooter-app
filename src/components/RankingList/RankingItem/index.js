import React from 'react';
import PropTypes from 'prop-types';

import { ProfilePic } from '@components/ProfilePic';

import { S } from './style';

const RankingItem = (props) => {
  const { userInFocus, data } = props;
  const { user, score, position, index = 1 } = data;

  const shouldFocus = userInFocus._id === user._id

  return (
    <S.RankingItem itsMe={shouldFocus}>
      <S.ProfilePic>
        <ProfilePic username={user.username} />
      </S.ProfilePic>
      <S.Name itsMe={shouldFocus}>{user.username}</S.Name>
      <S.Points itsMe={shouldFocus}>{score}</S.Points>
      <S.Position itsMe={shouldFocus}>{`#${position}`}</S.Position>
    </S.RankingItem>
  );
};

RankingItem.propTypes = {
  data: PropTypes.object.isRequired,
};

RankingItem.defaultProps = {};

export { RankingItem };
