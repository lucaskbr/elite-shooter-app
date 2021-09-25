import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { shootingActivitiesEndpoint } from '@services/eliteShooterApi/endpoints/shootingActivities';
import { chartsEndpoints } from '@services/eliteShooterApi/endpoints/chartsEndpoints';

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
import _ from 'lodash';
import { translate } from '../../../../utils/translate';

const ActivityDetailScreen = (props) => {
  const [activity, setActivity] = useState({});
  const [shotsDiference, setShotsDiference] = useState([]);
  const [accurateRegions, setAccurateRegions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { route, navigation } = props;

  const { id } = route.params;

  useEffect(() => {
    (async () => {
      Promise.all([
        shootingActivitiesEndpoint.findById(id),

        chartsEndpoints.shotsDiference({
          shootingActivityId: id,
          limit: 1
        }),

        chartsEndpoints.accurateRegions({
          shootingActivityId: id,
          limit: 1
        }),
      ])
        .then((values) => {
          setActivity(values[0].data);
          setShotsDiference(values[1].data);
          setAccurateRegions(values[2].data);
          setIsLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setIsLoading(false)
        });
    })();
  }, []);

  if (isLoading) {
    return <></>
  }

  return (
    <ScreenContainer
      paddingVertical={15}
      paddingHorizontal={15}
      style={{ justifyContent: 'center' }}
    >
      <S.Header>
        <S.Modality>{translate(_.get(activity, 'modality'))}</S.Modality>
        <Separator height={1} marginVertical={10} />

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <S.Date>{_.get(activity, 'date')}</S.Date>
          <S.Place>{_.get(activity, 'place.name')}</S.Place>
        </View>
      </S.Header>

      <Separator height={1} backgroundColor="#DCDCE6" marginVertical={20} />

      <ChartSlide shotsDiference={shotsDiference} accurateRegions={accurateRegions} />

      <Separator height={1} marginVertical={20} />

      <View style={{ alignItems: 'flex-start' }}>
        <S.Results>
          <Title text="Dados da atividade" />
          <Separator height={10} />
          <ResultText
            label="Total de disparos"
            result={_.get(activity, 'statistics.totalShots')}
          />
          <ResultText
            label="Acertos"
            result={_.get(activity, 'statistics.hits')}
            color="#48C78E"
          />
          <ResultText
            label="Erros"
            result={_.get(activity, 'statistics.missing')}
            color="#F14668"
          />

          {_.get(activity, 'statistics.windSpeed') &&
            <ResultText
              label="Velocidade do vento"
              result={_.get(activity, 'shootingRange.windSpeed')}
            />
          }
          
          <ResultText
            label="Média de pontos dos disparos"
            result={_.get(activity, 'statistics.pointsAverage')}
          />
          <ResultText
            label="Tipo do local"
            result={_.get(activity, 'shootingRange.type')}
          />
          <ResultText
            label="Baia de treino"
            result={_.get(activity, 'shootingRange.code')}
          />
          <ResultText
            label="Arma utilizada"
            result={`${_.get(activity, 'gun.type')} - ${_.get(activity, 'gun.brand')} ${_.get(activity, 'gun.model')}`}
          />
        </S.Results>
      </View>

      <Separator backgroundColor="#DCDCE6" marginVertical={20} />

      <Button text="Voltar" onPress={() => navigation.pop()} />
    </ScreenContainer>
  );
};

export { ActivityDetailScreen };
