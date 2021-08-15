import React, { useState, useEffect, useContext } from 'react';
import { StackActions } from '@react-navigation/native';

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
import { Alert } from 'react-native';
import { operations } from '../../../services/socketio';

import { AuthContext } from '@contexts/auth/authContext';

const AimScreen = (props) => {
  const { route, navigation } = props;
  const { params } = route;


  const { userId } = useContext(AuthContext);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSessionActive, setIsSessionActive] = useState(true);
  const [shootingActivityId, setShootingActivityId] = useState('');

  useEffect(() => {
    operations.emitShootingActivityStart({ ...params, ownerId: userId })
  }, [])

  useEffect(() => navigation.addListener('beforeRemove', (e) => {
        if (!isSessionActive) {
          return;
        }

        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert(
          'Deseja encerrar a sessão de tiro?',
          `Se você encerrar a sessão de tiro agora não será possível retomar o estado que ela está agora. O registro ficará salvo para consultas futuras`,
          [
            { text: "Não encerrar", style: 'cancel', onPress: () => {} },
            {
              text: 'Encerrar',
              style: 'destructive',
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: () => {
                operations.emitShootingActivityEnd();
                navigation.dispatch(e.data.action);
                navigation.dispatch(StackActions.popToTop());
              },
            },
          ]
        );
      }),
    [navigation, isSessionActive]
  );


  operations.listenShootingActivityStarted((err, shootingActivityId) => {
    if (err) return;

    console.log(shootingActivityId)
    setShootingActivityId(shootingActivityId);
  });



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
