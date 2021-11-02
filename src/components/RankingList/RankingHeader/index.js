import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import { ProfilePic } from '@components/ProfilePic';

import userPicPath from '@assets/dash.png';

import { S } from './style';

const RankingHeader = (props) => (
  <S.RankingHeader>
    <S.ProfilePic />
    <S.Name>Nome</S.Name>
    <S.Points>Pontuação</S.Points>
    <S.Position>Posição</S.Position>
  </S.RankingHeader>
);

RankingHeader.propTypes = {};

RankingHeader.defaultProps = {};

export { RankingHeader };
