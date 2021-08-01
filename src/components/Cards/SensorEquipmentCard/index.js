import React from 'react';
import { View } from 'react-native';
import { S } from './style';

const SensorEquipmentCard = (props) => {
  const { sensorEquipment, ...rest } = props;
  const { code, type } = sensorEquipment;

  return (
    <S.SensorEquipmentCard {...rest}>
      <View>
        <S.Title>{code}</S.Title>
      </View>
      <View>
        <S.Place>{type}</S.Place>
      </View>
      {Math.floor(Math.random() * 10) % 2 === 0 ? <S.Online>Online</S.Online> :  <S.Offline>Offline</S.Offline>}
    </S.SensorEquipmentCard>
  );
};

// SensorEquipmentCard.propTypes = {
//   shootingActivity: PropTypes.shape({
//     code:  PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//   })
// };

SensorEquipmentCard.defaultProps = {};

export { SensorEquipmentCard };
