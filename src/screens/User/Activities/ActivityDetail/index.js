import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { shootingActivitiesEndpoint } from '@services/eliteShooterApi/endpoints/shootingActivities';

import {
  Separator,
  Title,
  ResultText,
  ChartSlide,
  ScreenContainer,
  Button,
  IsLoading,
} from '@components';

import { S } from './style';

const ActivityDetailScreen = (props) => {
  const [activity, setActivity] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { route, navigation } = props;

  const { id } = route.params;
  const { goBack } = navigation;

  useEffect(() => {
    (async () => {
      Promise.all([
        shootingActivitiesEndpoint
          .findById(id)
          .then((result) => result.data)
          .catch((e) => {}),
      ])
        .then((values) => {
          setActivity(values[0]);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    })();
  }, []);

  if (isLoading) {
    return <IsLoading condition={isLoading} />;
  }

  return (
    <ScreenContainer
      paddingVertical={15}
      paddingHorizontal={15}
      style={{ justifyContent: 'center' }}
    >
      <S.Header>
        <S.Modality>{activity.modality}</S.Modality>
        <Separator height={1} marginVertical={10} />

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <S.Date>{activity.date}</S.Date>
          <S.Place>{activity.place.name}</S.Place>
        </View>
      </S.Header>

      <Separator height={1} backgroundColor="#DCDCE6" marginVertical={20} />

      <ChartSlide />

      <Separator height={1} marginVertical={20} />

      <View style={{ alignItems: 'flex-start' }}>
        <S.Results>
          <Title text="Dados da atividade" />
          <Separator height={10} />
          <ResultText label="Total de disparos" result={activity.date} />
          <ResultText label="Acertos" result="FALTA" color="#48C78E" />
          <ResultText label="Erros" result="FALTA" color="#F14668" />

          <ResultText label="Velocidade do vento" result="FALTA" />
          <ResultText label="Tempo médio entre disparos" result="FALTA" />
          <ResultText
            label="Tipo do local"
            result={activity.shootingRange.type}
          />
          <ResultText
            label="Baia de treino"
            result={activity.shootingRange.code}
          />
          <ResultText
            label="Arma utilizada"
            result={`${activity.gun.type} - ${activity.gun.brand} ${activity.gun.model}`}
          />
        </S.Results>
      </View>

      <Separator backgroundColor="#DCDCE6" marginVertical={20} />

      <Button text="Voltar" onPress={() => navigation.pop()} />
    </ScreenContainer>
  );
};

export { ActivityDetailScreen };
