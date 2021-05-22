import * as React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import { S } from './style';

const ActivityCard = (props) => {
  const { modality, date, place, ...rest } = props;

  return (
    <S.ActivityCard {...rest}>
      <View>
        <S.Title>{modality}</S.Title>
        <S.Date>
          <S.DateLabel>Data: </S.DateLabel>
          {date}
        </S.Date>
      </View>
      <View>
        <S.Place>{place}</S.Place>
      </View>
    </S.ActivityCard>
  );
};

ActivityCard.propTypes = {
  modality: PropTypes.string.isRequired,
  // date: PropTypes.string.isRequired,
  // place: PropTypes.string.isRequired
};

ActivityCard.defaultProps = {};

export { ActivityCard };
