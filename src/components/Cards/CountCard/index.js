import * as React from 'react';
import PropTypes from 'prop-types';

import {LinearGradient} from 'expo-linear-gradient';

import { S } from './style';

const CountCard = (props) => {
  const { number, title, gradientArray, ...rest } = props;

  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      locations={[0, 0.6, 0.9]}
      colors={gradientArray}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: 120,
        borderRadius: 15,
      }}
    >
      <S.Number>
        {number}
      </S.Number>
      <S.Title>
        {title}
      </S.Title>
      
    </LinearGradient>
  );
};

CountCard.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.number.isRequired,
};

CountCard.defaultProps = {};

export { CountCard };
