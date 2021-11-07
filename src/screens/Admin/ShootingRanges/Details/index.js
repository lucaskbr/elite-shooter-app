import React, { useEffect, useState } from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import _ from 'lodash';

import * as Print from 'expo-print';
import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';

import { shootingRangesEndpoints } from '@services/eliteShooterApi/endpoints/shootingRanges';
import { shootingActivitiesEndpoint } from '@services/eliteShooterApi/endpoints/shootingActivities';
import { usersEndpoints } from '@services/eliteShooterApi/endpoints/usersEndpoints';

import QRCode from 'react-native-qrcode-svg';
import { IconOutline } from '@ant-design/icons-react-native';

import { translate } from '@utils/translate';
import { qrcodesEndpoints } from '@services/eliteShooterApi/endpoints/qrcodesEndpoints';

import {
  Separator,
  Title,
  ScreenContainer,
  Button,
  IsLoading,
  SensorEquipmentCard,
  ActivityCard,
  ProfileInfo,
  EmptyList,
} from '@components';

import { S } from './style';

const ShootingRangesDetailsScreen = (props) => {
  const { route, navigation } = props;

  const { id, searchForCurrentShooter } = route.params;

  const [shootingRange, setShootingRange] = useState({});
  const [currentUser, setCurrentUser] = useState(null);
  const [qrcodeValue, setQrcodeValue] = useState('');
  const [shootingActivities, setShootingActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleQRCode = (shootingRange) => {
    if (!shootingRange) return;

    const obj = {
      shootingRangeId: shootingRange._id,
      sensorEquipmentId: shootingRange.sensorEquipment,
    }

    setQrcodeValue(JSON.stringify(obj))
  }

  const getCurrentUserInShootingRange = (lastShootingActivity) => {
    const lastShootingActivityIsActive = _.get(lastShootingActivity, 'isActive', false)
    if (!lastShootingActivityIsActive) return;

    usersEndpoints
    .findById({ id: _.get(lastShootingActivity, 'owner')})
    .then(value => {
      setCurrentUser(value.data)
    })
    .catch(e => {})
  }

  const generateQRCodeHtml = (shootingRangeId) => {
    return qrcodesEndpoints.generate({ shootingRangeId })
    .then(result => result.data)
    .catch(e => {})
  }

  const generateQRCodePdf = async () => {
    const data = await generateQRCodeHtml(shootingRange._id);

    if (!data) {
      return;
    }

    const result = await Print.printToFileAsync({
      html: data,
    })

    const contentURI = await FileSystem.getContentUriAsync(result.uri);
    IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
      data: contentURI,
      flags: 1,
      type: 'application/pdf'
   });
  }

  useEffect(() => {
    (async () => {
      Promise.all([
        shootingRangesEndpoints.findById(id),
        shootingActivitiesEndpoint.findAll({
          shootingRangeId: id,
          ignoreOwner: true,
          limit: 10
        })
      ])
      .then(values => {
        setShootingRange(_.get(values, '[0].data'));
        handleQRCode(_.get(values, '[0].data'))
        setShootingActivities(_.get(values, '[1].data'));
        searchForCurrentShooter && getCurrentUserInShootingRange(_.get(values, '[1].data.[0]'))
        setIsLoading(false);
      })
      .catch(e => {
        setIsLoading(false);
      })
    })();
  }, []);

  if (isLoading) {
    return <IsLoading condition={isLoading} />;
  }

  return (
    <ScreenContainer
      paddingVertical={15}
      paddingHorizontal={15}
      style={{ justifyContent: 'space-between' }}
    >
      <S.Header>
        <S.ShootingRange>Baia de tiro - #{_.get(shootingRange, 'code', '')}</S.ShootingRange>
        <S.Type>{translate(_.get(shootingRange, 'type'))}</S.Type>
        <Separator height={5} />

        <S.QRCodeView>
          <QRCode
            value={qrcodeValue}
          />
        </S.QRCodeView>
        <S.PdfIcon onPress={generateQRCodePdf}>
          <IconOutline name="file-pdf" color="#fff" size={30} />
        </S.PdfIcon>
        <Separator height={30} />
      </S.Header>

      <ScrollView showsVerticalScrollIndicator={false}>
        <S.Body>
          <S.SensorEquipment>Sensor no local:</S.SensorEquipment>
          <Separator height={10} />
          <SensorEquipmentCard
            sensorEquipment={_.get(shootingRange, 'sensorEquipment')}
          />
          <Separator height={30} />

          {currentUser && (
            <>
              <Title text="Atirador ativo:" />
              <ProfileInfo username={_.get(currentUser, 'username')} />
              <Separator height={30} />
            </>
          )}

          <FlatList
            contentContainerStyle={{ padding: 1 }}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View
                style={{
                  width: '100%',
                  marginBottom: 30,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Title text="Ultimas atividades" />
              </View>
            }
            ItemSeparatorComponent={() => <Separator height={10} />}
            data={shootingActivities}
            keyExtractor={(item) => `${item._id}`}
            ListEmptyComponent={() => (<EmptyList text="Nenhuma atividade encontrada" />)}
            renderItem={({ item }) => (
              <ActivityCard
                disabled={true}
                shootingActivity={item}
              />
            )}
            ListFooterComponent={(<Separator height={30} />)}
          />
          
        </S.Body>
      </ScrollView>
      <S.Footer>
        <Button text="Voltar" onPress={() => navigation.goBack()} />
      </S.Footer>
    </ScreenContainer>
  );
};

export { ShootingRangesDetailsScreen };
