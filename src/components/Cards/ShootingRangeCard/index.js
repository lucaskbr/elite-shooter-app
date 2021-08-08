import React from 'react';
import { View } from 'react-native';
import { S } from './style';

const ShootingRangeCard = (props) => {
  const { shootingRange, isOnline, ...rest } = props;
  const { code, type } = shootingRange;

  return (
    <S.ShootingRangeCard {...rest}>
      <View>
        <S.Title>{code || ''}</S.Title>
      </View>
      <View>
        <S.Place>{type || ''}</S.Place>
      </View>
      {/* {Math.floor(Math.random() * 10) % 2 === 0 ? <S.Online>Online</S.Online> :  <S.Offline>Offline</S.Offline>} */}
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
