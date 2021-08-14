import React from 'react';

import { ScreenContainer } from '@components';

import controllerPath from '@assets/controller.png';
import medalPath from '@assets/medal.png';
import { S } from './style';

const ModalityScreen = (props) => {
  const { route, navigation } = props;
  const { params } = route;
  const { navigate } = navigation;

  return (
    <ScreenContainer paddingHorizontal={15} style={{ paddingTop: 50 }}>
      <S.ModalityContainer>
        <S.ModalityCard underlayColor="#F6F6F6" onPress={() => navigate('Aim', { ...params, modality: 'training' })}>
          <>
            <S.ModalityImg resizeMode="contain" source={controllerPath} />
            <S.ModalityTitle>Treino</S.ModalityTitle>
          </>
        </S.ModalityCard>

        <S.ModalityCard underlayColor="#F6F6F6" onPress={() => navigate('Aim', { ...params, modality: 'competition' })}>
          <>
            <S.ModalityImg resizeMode="contain" source={medalPath} />
            <S.ModalityTitle>Competição</S.ModalityTitle>
          </>
        </S.ModalityCard>
      </S.ModalityContainer>
    </ScreenContainer>
  );
};

export { ModalityScreen };
