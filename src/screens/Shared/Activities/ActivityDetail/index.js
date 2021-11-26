import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import _ from 'lodash';

import { shootingActivitiesEndpoint } from '@services/eliteShooterApi/endpoints/shootingActivities';
import { chartsEndpoints } from '@services/eliteShooterApi/endpoints/chartsEndpoints';

import * as Print from 'expo-print';
import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';

import { translate } from '@utils/translate';
import { alertErrorFromHttpCall } from '@utils/alertErrorFromHttpCall';
import { IconOutline } from '@ant-design/icons-react-native';

import { docketsEndpoints } from '@services/eliteShooterApi/endpoints/docketsEndpoints';

import {
  Separator,
  Title,
  ResultText,
  ChartSlide,
  ScreenContainer,
  Button,
} from '@components';

import { S } from './style';

const ActivityDetailScreen = (props) => {
  const [activity, setActivity] = useState({});
  const [shotsDiference, setShotsDiference] = useState({});
  const [accurateRegions, setAccurateRegions] = useState({});
  const [scoreHistory, setScoreHistory] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { route, navigation } = props;

  const { id } = route.params;

  const generateQRCodeHtml = (shootingActivityId) =>
    docketsEndpoints
      .generate({ shootingActivityId })
      .then((result) => result.data)
      .catch((e) => {});

  const generateQRCodePdf = async () => {
    const data = await generateQRCodeHtml(id);

    if (!data) {
      return;
    }

    const result = await Print.printToFileAsync({
      html: data,
      height: 400,
    });

    const contentURI = await FileSystem.getContentUriAsync(result.uri);
    IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
      data: contentURI,
      flags: 1,
      type: 'application/pdf',
    });
  };

  useEffect(() => {
    (async () => {
      Promise.all([
        shootingActivitiesEndpoint.findById(id),

        chartsEndpoints.shotsDiference({
          shootingActivityId: id,
          limit: 1,
        }),

        chartsEndpoints.accurateRegions({
          shootingActivityId: id,
          limit: 1,
        }),

        chartsEndpoints.scoreHistory({
          shootingActivityId: id,
          limit: 1,
        }),
      ])
        .then((values) => {
          setActivity(values[0].data);
          setShotsDiference(values[1].data);
          setAccurateRegions(values[2].data);
          setScoreHistory(values[3].data);
          setIsLoading(false);
        })
        .catch((err) => {
          alertErrorFromHttpCall(err);
          setIsLoading(false);
        });
    })();
  }, []);

  if (isLoading) {
    return <></>;
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
        {_.get(activity, 'modality', '') === 'competition' && (
          <>
            <S.PdfIcon onPress={generateQRCodePdf}>
              <IconOutline name="file-pdf" color="#fff" size={30} />
            </S.PdfIcon>
            <Separator height={1} marginVertical={10} />
          </>
        )}

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

      <ChartSlide
        shotsDiference={shotsDiference}
        accurateRegions={accurateRegions}
        scoreHistory={scoreHistory}
      />

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

          {_.get(activity, 'score', 0) !== 0 && (
            <ResultText
              label="Total de pontos"
              result={_.get(activity, 'score')}
            />
          )}

          <ResultText
            label="Média de pontos dos disparos"
            result={_.get(activity, 'statistics.pointsAverage')}
          />
          <ResultText
            label="Tipo do local"
            result={translate(_.get(activity, 'shootingRange.type'))}
          />
          <ResultText
            label="Baia de treino"
            result={_.get(activity, 'shootingRange.code')}
          />
          <ResultText
            label="Arma utilizada"
            result={`${translate(_.get(activity, 'gun.type'))} - ${_.get(
              activity,
              'gun.brand',
            )} ${_.get(activity, 'gun.model')}`}
          />
        </S.Results>
      </View>

      <Separator backgroundColor="#DCDCE6" marginVertical={20} />

      <Button text="Voltar" onPress={() => navigation.pop()} />
    </ScreenContainer>
  );
};

export { ActivityDetailScreen };
