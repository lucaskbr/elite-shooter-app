import React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';

const NoPlaceForUser = (props) => {
  return (
    <S.NoPlaceForUser>
      <S.Title>Nenhum local ativo ou cadastrado</S.Title>
    </S.NoPlaceForUser>
  );
};


export { NoPlaceForUser };
