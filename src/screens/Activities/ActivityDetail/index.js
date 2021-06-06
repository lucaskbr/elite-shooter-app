import React, { useState } from 'react';
import { View } from 'react-native';



import {
  Separator,
  Title,
  ResultText,
  ChartSlide,
  ScreenContainer,
  Button
} from '../../../components';

import { S } from './style';

const ActivityDetailScreen = (props) => {

  const { navigation } = props;
  const { goBack } = navigation;

  return (
    <ScreenContainer paddingVertical={15} paddingHorizontal={15} style={{ justifyContent: 'center' }}>

      <S.Header>
        <S.Modality>Treino</S.Modality>
        <Separator height={1} marginVertical={10} />

        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <S.Date>07/07/1999</S.Date>
          <S.Place>Clube SK</S.Place>
        </View>
      </S.Header>

      <Separator height={1} backgroundColor="#DCDCE6" marginVertical={20} />

      <ChartSlide />

      <Separator height={1}  marginVertical={20} />
      
      <View style={{ alignItems: 'flex-start' }}>
 
        <S.Results>
          <Title text="Dados da atividade" />
          <Separator height={10} />
          <ResultText label="Total de disparos" result="19" />
          <ResultText label="Acertos" result="9" color="#48C78E" />
          <ResultText label="Erros" result="10" color="#F14668" />

          <ResultText label="Velocidade do vento" result="10ms" />
          <ResultText label="Tempo médio entre disparos" result="10s" />
          <ResultText label="Baia de treino" result="A23" />
        </S.Results>

      </View>

      <Separator backgroundColor="#DCDCE6" marginVertical={20} />

      <Button text="Voltar" onPress={() => goBack()} />

    </ScreenContainer>
  )
};

export { ActivityDetailScreen };
