import _ from 'lodash';
import React from 'react';
import { View } from 'react-native';
import { S } from './style';

const ShootingRangeCard = (props) => {
  const { shootingRange, isOnline, ...rest } = props;

  return (
    <S.ShootingRangeCard {...rest}>
      <View>
        <S.Title>{_.get(shootingRange, 'code')}</S.Title>
      </View>
      <View>
        <S.Place>{_.get(shootingRange, 'type')}</S.Place>
      </View>
      {isOnline ? <S.Online>Online</S.Online> : <S.Offline>Offline</S.Offline>}
      
    </S.ShootingRangeCard>
  );
};

// ShootingRangeCard.propTypes = {
//   shootingActivity: PropTypes.shape({
//     code:  PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//   })
// };

ShootingRangeCard.defaultProps = {};

export { ShootingRangeCard };
