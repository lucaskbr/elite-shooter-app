import _ from 'lodash';
import React from 'react';
import { View } from 'react-native';
import { S } from './style';

const SensorEquipmentCard = (props) => {
  const { sensorEquipment, ...rest } = props;

  return (
    <S.SensorEquipmentCard {...rest}>
      <View>
        <S.Title>{_.get(sensorEquipment, 'code')}</S.Title>
      </View>
      <View>
        <S.Place>{_.get(sensorEquipment, 'type')}</S.Place>
      </View>
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
