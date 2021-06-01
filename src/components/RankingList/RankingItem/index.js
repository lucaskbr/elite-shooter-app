import * as React from 'react';
import PropTypes from 'prop-types';

import { ProfilePic } from '../../ProfilePic';

import { S } from './style';

const RankingItem = (props) => {

  const { data } = props;
  const { avatar, name, points, position, index } = data;

  return (
    <S.RankingItem itsMe={index === 0} >
      <S.ProfilePic>
        <ProfilePic height={50} source={avatar && { uri: avatar}} />
      </S.ProfilePic>
      <S.Name itsMe={index === 0}>
        {name}
      </S.Name>
      <S.Points itsMe={index === 0}>
        {points}
      </S.Points>
      <S.Position itsMe={index === 0}>
        {`#${position}`}
      </S.Position>
    </S.RankingItem>
  );
};

RankingItem.propTypes = {
  data: PropTypes.object.isRequired
};

RankingItem.defaultProps = {};

export { RankingItem };
