import React, { useState, useEffect, useContext } from 'react';
import { StackActions } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { Alert } from 'react-native';

import { AuthContext } from '@contexts/auth/authContext';

import { operations } from '@services/socketio';

import blankTargetPath from '@assets/targets/blank.png';

import sevenBotLeftTargetPath from '@assets/targets/7-bot-left.png';
import sevenBotRightTargetPath from '@assets/targets/7-bot-right.png';
import sevenTopLeftTargetPath from '@assets/targets/7-top-left.png';
import sevenTopRightTargetPath from '@assets/targets/7-top-right.png';

import eightBotLeftTargetPath from '@assets/targets/8-bot-left.png';
import eightBotRightTargetPath from '@assets/targets/8-bot-right.png';
import eightTopLeftTargetPath from '@assets/targets/8-top-left.png';
import eightTopRightTargetPath from '@assets/targets/8-top-right.png';

import nineBotLeftTargetPath from '@assets/targets/9-bot-left.png';
import nineBotRightTargetPath from '@assets/targets/9-bot-right.png';
import nineTopLeftTargetPath from '@assets/targets/9-top-left.png';
import nineTopRightTargetPath from '@assets/targets/9-top-right.png';

import centerTargetPath from '@assets/targets/center.png';

import {
  Button,
  ResultText,
  ScreenContainer,
  Separator,
  Title,
} from '@components';

import { S } from './style';

import { TipModal } from './TipModal';

const AimScreen = (props) => {
  const { route, navigation } = props;
  const { params } = route;

  const { userId } = useContext(AuthContext);

  const [currentTarget, setCurrentTarget] = useState(blankTargetPath);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSessionActive, setIsSessionActive] = useState(true);
  const [shootingActivityId, setShootingActivityId] = useState('');
  const [shootingSession, setShootingSession] = useState({
    total: 0,
    hits: 0,
    mistakes: 0,
    score: 0,
    windSpeed: 0,
    averageTimeBetweenShots: 0
  });

  const targets = {
    'blank': blankTargetPath,
    '7-bot-left': sevenBotLeftTargetPath,
    '7-bot-right': sevenBotRightTargetPath,
    '7-top-left': sevenTopLeftTargetPath,
    '7-top-right': sevenTopRightTargetPath,
    '8-bot-left': eightBotLeftTargetPath,
    '8-bot-right': eightBotRightTargetPath,
    '8-top-left': eightTopLeftTargetPath,
    '8-top-right': eightTopRightTargetPath,
    '9-bot-left': nineBotLeftTargetPath,
    '9-bot-right': nineBotRightTargetPath,
    '9-top-left': nineTopLeftTargetPath,
    '9-top-right': nineTopRightTargetPath,
    'center': centerTargetPath,
  }

  useEffect(() => {

    operations.subscribeShootingActivityStarted((err, shootingActivityId) => {
      if (err) {
        return;
      };
      console.log('subscribeShootingActivityStarted')
      setShootingActivityId(shootingActivityId);
    });
  
    operations.subscribeShootingActivityShotResult((err, shot) => {
      if (err) {
        return;
      };

      mapShotToTarget(shot);
  
      setShootingSession((prevState) => ({
        ...prevState,
        hits: prevState.hits + 1,
        total: prevState.total + 1,
      }));
    });

    setTimeout(() => {
      operations.emitShootingActivityStart({ ...params, ownerId: userId })
      setIsLoading(false)
    }, 1000);

  }, []);

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
                operations.emitShootingActivityEnd({ shootingActivityId });
                navigation.dispatch(e.data.action);
                navigation.dispatch(StackActions.popToTop());
              },
            },
          ]
        );
      }),
    [navigation, isSessionActive, shootingActivityId]
  );

  const mapShotToTarget = (shot) => {
    if (!shot || !shot.value || !shot.vertical || !shot.horizontal) {
      return setCurrentTarget(targets['blank'])
    }

    if (shot.value === 10) {
      return setCurrentTarget(targets[`center`])
    }
    
    setCurrentTarget(targets[`${shot.value}-${shot.vertical}-${shot.horizontal}`])
  }

  const shotMistake = () => setShootingSession(prevState => ({
      ...prevState,
      total: prevState.total + 1,
      mistakes: prevState.mistakes + 1
    }))

  const undoAction = () => setShootingSession(prevState => ({
      ...prevState,
      total: prevState.mistakes - 1 < 0 ? prevState.total : prevState.total - 1,
      mistakes: prevState.mistakes - 1 < 0 ? 0 : prevState.mistakes - 1
    }))

    console.log(shootingActivityId)

  if (isLoading) {
    return <></>
  }

  return (
    <ScreenContainer paddingVertical={15} paddingHorizontal={15}>
      <S.Online>Online</S.Online>
      <S.TargetInfo>
        <S.ShotsTitle>Disparos</S.ShotsTitle>
        <S.ShotsCount>{`#${shootingSession.total}`}</S.ShotsCount>
        <Separator height={10} />
        {currentTarget && (<S.Target resizeMode="contain" source={currentTarget || blankTargetPath} />)}
      </S.TargetInfo>
      <S.Results>
        <Title text="Dados do treino" />
        <Separator height={10} />
        <ResultText label="Acertos" result={shootingSession.hits} color="#48C78E" />
        <ResultText label="Erros" result={shootingSession.mistakes} color="#F14668" />
        <ResultText label="Pontuação" result={shootingSession.score} color="#F14668" />
        <ResultText label="Velocidade do vento" result={`${shootingSession.windSpeed}ms`} />
        <ResultText label="Tempo médio entre disparos" result={`${shootingSession.averageTimeBetweenShots}s`} />
        <Separator marginVertical={10} />
        {/* <Button text="Errei" onPress={() => setIsModalVisible(true)} /> */}
        <Button text="Errei" onPress={shotMistake} />
        <Separator marginVertical={10} />
        <Button text="Desfazer ultimo" type="invisible" onPress={undoAction} />
      </S.Results>

      <TipModal
        onChange={(data) => {
          setIsModalVisible(false);
        }}
        isVisible={isModalVisible}
      />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </ScreenContainer>
  );
};

export { AimScreen };
