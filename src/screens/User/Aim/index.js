import React, { useState, useEffect } from 'react';

import {
  Button,
  ResultText,
  ScreenContainer,
  Separator,
  Title,
} from '@components';

import targetPath from '@assets/target.png';
import { TipModal } from './TipModal';

import { S } from './style';

const AimScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ScreenContainer paddingVertical={15} paddingHorizontal={15}>
      <S.Online>Online</S.Online>
      <S.TargetInfo>
        <S.ShotsTitle>Disparos</S.ShotsTitle>
        <S.ShotsCount>#19</S.ShotsCount>
        <Separator height={10} />
        <S.Target resizeMode="contain" source={targetPath} />
      </S.TargetInfo>
      <S.Results>
        <Title text="Dados do treino" />
        <Separator height={10} />
        <ResultText label="Acertos" result="9" color="#48C78E" />
        <ResultText label="Erros" result="10" color="#F14668" />
        <ResultText label="Pontuação" result="25" color="#F14668" />
        <ResultText label="Velocidade do vento" result="10ms" />
        <ResultText label="Tempo médio entre disparos" result="10s" />
        <ResultText label="Baia de treino" result="A23" />
        <Separator marginVertical={10} />
        <Button text="Errei" onPress={() => setIsModalVisible(true)} />
        <Separator marginVertical={10} />
        <Button text="Desfazer ultimo" type="invisible" />
      </S.Results>

      <TipModal
        onChange={(data) => {
          setIsModalVisible(false);
        }}
        isVisible={isModalVisible}
      />
    </ScreenContainer>
  );
};

export { AimScreen };
