import React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';

import pistolPath from '@assets/pistol.png';
import revolverPath from '@assets/revolver.png';
import riflelPath from '@assets/rifle.png';
import shotgunPath from '@assets/shotgun.png';

const GunCard = (props) => {
  const { gun, ...rest } = props;
  const { brand, model, serieNumber, type, score } = gun;

  const handleImgToDisplay = (type) => {
    switch (type) {
      case 'rifle':
        return riflelPath;
      case 'pistol':
        return pistolPath;
      case 'shotgun':
        return shotgunPath;
      case 'revolver':
        return revolverPath;
      default:
        return pistolPath;
    }
  };

  return (
    <S.GunCard delayLongPress={1500} {...rest}>
      <S.GunImageWrapper>
        <S.GunImage resizeMode="contain" source={handleImgToDisplay(type)} />
      </S.GunImageWrapper>
      <S.InfoWrapper>
        <S.BrandModel>{`${brand} ${model}`}</S.BrandModel>
        <S.Serie>{serieNumber}</S.Serie>
        {/* <S.Points>{score}</S.Points> */}
      </S.InfoWrapper>
    </S.GunCard>
  );
};

// GunCard.propTypes = {
//   model: PropTypes.string.isRequired,
//   serieNumber: PropTypes.string.isRequired,
//   score: PropTypes.string.isRequired,
// };

GunCard.defaultProps = {};

export { GunCard };
