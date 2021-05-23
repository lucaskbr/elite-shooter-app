import * as React from 'react';

import targetPath from '../../../assets/target.png';
import {
  ResultText,
  ScreenContainer,
  Separator,
  Title,
} from '../../components';

import { S } from './style';

const AimScreen = () => (
  <ScreenContainer paddingVertical={15} paddingHorizontal={15}>
    <S.TargetInfo>
      <S.ShotsTitle>Disparos</S.ShotsTitle>
      <S.ShotsCount>#19</S.ShotsCount>
      <Separator height={10} />
      <S.Target resizeMode="contain" source={targetPath} res />
    </S.TargetInfo>
    <S.Results>
      <Title text="Dados do treino" />
      <Separator height={10} />
      <ResultText label="Acertos" result="9" color="#48C78E" />
      <ResultText label="Erros" result="10" color="#F14668" />

      <ResultText label="Velocidade do vento" result="10ms" />
      <ResultText label="Tempo médio entre disparos" result="10s" />
      <ResultText label="Baia de treino" result="A23" />
    </S.Results>
  </ScreenContainer>
);

export { AimScreen };
