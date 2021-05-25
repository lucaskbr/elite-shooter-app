import * as React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';

const GunCard = (props) => {
  const { modality, date, place, ...rest } = props;

  return (
    <S.GunCard {...rest}>
      <S.Model>Taurus XXXX</S.Model>
      <S.Serie>PJH8800</S.Serie>
      <S.Points>000000</S.Points>
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
