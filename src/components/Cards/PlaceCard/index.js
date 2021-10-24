import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Switch, View } from 'react-native';

import { S } from './style';
import _ from 'lodash';

const PlaceCard = (props) => {

  const { place, switchOnValueChange, ...rest } = props;

  const [isEnabled, setIsEnabled] = useState(_.get(place, 'isActive'));

  const toggleSwitch = () => {
    switchOnValueChange && switchOnValueChange(_.get(place, '_id'), !isEnabled)
    setIsEnabled(previousState => !previousState)
  };

  return (
    <S.PlaceCard disabled={!isEnabled} {...rest}>
      <View>
        <S.Name>{_.get(place, 'name')}</S.Name>
      </View>
      <View>
        <Switch
          trackColor={{
            false: "#767577",
            true: "#767577"
          }}
          thumbColor={isEnabled ? "#FF0066" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </S.PlaceCard>
  );
};

// PlaceCard.propTypes = {
//   place: PropTypes.shape({
//     modality: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     place: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//     }),
//   }),
// };

PlaceCard.defaultProps = {};

export { PlaceCard };
