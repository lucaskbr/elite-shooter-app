import * as React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import { S } from './style';
import { translate } from '@utils/translate';
import _ from 'lodash';

const ActivityCard = (props) => {
  const { shootingActivity, disabled = false, ...rest } = props;
  const { modality, place, date } = shootingActivity;

  return (
    <S.ActivityCard disabled={disabled} {...rest}>
      <View>
        <S.Title>{translate(modality)}</S.Title>
        <S.Date>
          <S.DateLabel>Data: </S.DateLabel>
          {date}
        </S.Date>
      </View>
      <View>
        <S.Place>{_.get(place, 'name')}</S.Place>
      </View>
    </S.ActivityCard>
  );
};

// ActivityCard.propTypes = {
//   shootingActivity: PropTypes.shape({
//     modality: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     place: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//     }),
//   }),
// };

ActivityCard.defaultProps = {};

export { ActivityCard };
