import * as React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import { S } from './style';
import { ProfilePic } from '../../ProfilePic';


import userPicPath from '../../../../assets/dash.png';

const RankingItem = (props) => {

  const { img, name, points, position } = props;

  return (
    <S.RankingItem>
      <S.ProfilePic>
        <ProfilePic height={50} source={userPicPath} />
      </S.ProfilePic>
      <S.Name>
        Helewise
      </S.Name>
      <S.Points>
        3500000
      </S.Points>
      <S.Position>
        #07
      </S.Position>
    </S.RankingItem>
  );
};

RankingItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  points: PropTypes.string.isRequired,
  position:  PropTypes.string.isRequired,
};

RankingItem.defaultProps = {};

export { RankingItem };
