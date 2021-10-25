import React, { useEffect } from 'react';
import { CountUp } from 'use-count-up'

import { LinearGradient } from 'expo-linear-gradient';

import { S } from './style';

const CountCard = (props) => {
  const { number = 0, title, gradientArray, ...rest } = props;

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
        <CountUp isCounting end={number} duration={6} />
      </S.Number>
      <S.Title>
        {title}
      </S.Title>
      
    </LinearGradient>
  );
};

export { CountCard };
