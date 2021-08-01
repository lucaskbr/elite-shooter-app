import * as React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import { S } from './style';

const ActivityCard = (props) => {
  const { shootingActivity, ...rest } = props;
  const { modality, date, place } = shootingActivity;

  return (
    <S.ActivityCard {...rest}>
      {/* <View>
        <S.Title>{modality}</S.Title>
        <S.Date>
          <S.DateLabel>Data: </S.DateLabel>
          {date}
        </S.Date>
      </View>
      <View>
        <S.Place>{place.name}</S.Place>
      </View> */}
    </S.ActivityCard>
  );
};

ActivityCard.propTypes = {
  shootingActivity: PropTypes.shape({
    modality: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    place: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }),
};

ActivityCard.defaultProps = {};

export { ActivityCard };
