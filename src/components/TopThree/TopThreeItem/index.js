import * as React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';
import { ProfilePic } from '../../ProfilePic';


import userPicPath from '../../../../assets/dash.png';
import crownPath from '../../../../assets/crown.png';

const TopThreeItem = (props) => {

  const { isFirst, data } = props;
  const { name, avatar } = data;

  return (
    <S.TopThreeItem>
      { isFirst && <S.Crown source={crownPath} /> }
      <ProfilePic source={avatar && {uri: avatar}} />
      <S.Name>{name}</S.Name>
    </S.TopThreeItem>
  );
};

TopThreeItem.propTypes = {
  isFirst: PropTypes.bool,
  data: PropTypes.object.isRequired
};

TopThreeItem.defaultProps = {};

export { TopThreeItem };
