import * as React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';
import { ResultText } from '../ResultText';

const GunCard = (props) => {
  const { modality, date, place, ...rest } = props;

  return (
    <S.GunCard {...rest}>
      <ResultText label="" result="Taurus XXXX" />
      <ResultText label="" result="XXXX" />
      <ResultText label="" result="0000" />
    </S.GunCard>
  );
};

GunCard.propTypes = {
  model: PropTypes.string.isRequired,
  serieNumber: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};

GunCard.defaultProps = {};

export { GunCard };
