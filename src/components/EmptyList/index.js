import React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';
import { IconOutline } from '@ant-design/icons-react-native';

const EmptyList = (props) => {
  const { text } = props;

  return (
    <S.EmptyList>
      <IconOutline name="file-search" color="#D0D0D0" size={150} />
      <S.EmptyListText>{text}</S.EmptyListText>
    </S.EmptyList>
  );
};


export { EmptyList };
