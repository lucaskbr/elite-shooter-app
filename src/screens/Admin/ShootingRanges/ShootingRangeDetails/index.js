import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { shootingRangesEndpoints } from '@services/eliteShooterApi/endpoints/shootingRanges';

import {
  Separator,
  Title,
  ResultText,
  ChartSlide,
  ScreenContainer,
  Button,
  IsLoading,
  SensorEquipmentCard,
} from '@components';

import { S } from './style';

const ShootingRangeDetailsScreen = (props) => {
  const { route, navigation } = props;
  const { goBack } = navigation;

  const { id } = route.params;

  const [shootingRange, setShootingRange] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await shootingRangesEndpoints.findById(id);
        setShootingRange(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
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
        <S.ShootingRange>Baia de tiro - #{shootingRange.code}</S.ShootingRange>
        <S.Type>{shootingRange.type}</S.Type>
      </S.Header>

      <S.Body>
        <S.SensorEquipment>Sensor no local:</S.SensorEquipment>
        <Separator height={10} />
        <SensorEquipmentCard sensorEquipment={shootingRange.sensorEquipment} />

        <Text>Mostrar usuario ativo aqui</Text>

      </S.Body>

      <S.Footer>
        <Button text="Editar" type="success" onPress={() => goBack()} />
        <Separator height={10} />
        <Button text="Voltar" onPress={() => goBack()} />
      </S.Footer>
    </ScreenContainer>
  );
};

export { ShootingRangeDetailsScreen };
