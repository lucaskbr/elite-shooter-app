import * as React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';

const EmptyList = (props) => {
  const { children } = props;

  return (
    <S.EmptyList>{children}</S.EmptyList>
  );
};


export { EmptyList };
