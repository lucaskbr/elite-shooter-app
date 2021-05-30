import * as React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';
import { ProfilePic } from '../../ProfilePic';


import userPicPath from '../../../../assets/dash.png';
import crownPath from '../../../../assets/crown.png';

const TopThreeItem = (props) => {

  const { isFirst } = props;

  return (
    <S.TopThreeItem>
      { isFirst && <S.Crown source={crownPath} /> }
      <ProfilePic source={userPicPath} />
      <S.Name>Shillingford</S.Name>
    </S.TopThreeItem>
  );
};

TopThreeItem.propTypes = {
};

TopThreeItem.defaultProps = {};

export { TopThreeItem };
