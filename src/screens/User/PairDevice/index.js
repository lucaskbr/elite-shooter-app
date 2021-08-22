import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { IconOutline } from '@ant-design/icons-react-native';
import { useFocusEffect } from '@react-navigation/native';

import { ViewContainer } from '@containers';

import { Button, ScreenContainer, Separator } from '@components';

import { S } from './style';

const PairDeviceScreen = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [shouldScan, setShouldScan] = useState(false);

  const { navigation } = props;

  const cameraPermissionReq = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  useFocusEffect(
    useCallback(() => {
      (async () => {
        await cameraPermissionReq();
        setScanned(false);
      })()
    }, [])
  );


  const handleBarCodeScanned = ({ type, data: json }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    const data = JSON.parse(json)
    // { placeId: 'placeID', shootingRangeId: 'shootingRangeId' }

    navigation.navigate('ListGunsToUse', data);
    setShouldScan(false);
  };

  const handleMessageRequestPermission = (hasPermission) => {
    if (hasPermission === null) {
      return 'Pedindo acesso a camera';
    }

    if (hasPermission === false) {
      return 'Sem acesso a camera';
    }
  };

  if (!hasPermission) {
    return (
      <S.PermissionContainer paddingHorizontal={10} paddingVertical={10}>
        <IconOutline name="camera" size={200} />
        <S.Permission>
          {handleMessageRequestPermission(hasPermission)}
        </S.Permission>
        <Separator height={20} />
        <Button onPress={cameraPermissionReq} text="Requisitar acesso" />
      </S.PermissionContainer>
    );
  }

  return (
    <ScreenContainer paddingHorizontal={10}>
      {!shouldScan && (
        <ViewContainer direction="column">
          <IconOutline name="qrcode" size={300} />
          <Button
            text="Scanear agora"
            // onPress={() => setShouldScan((prevState) => !prevState)}
            // TODO: Remove this
            onPress={() => navigation.navigate('ListGunsToUse', { placeId: '6122a10c6e321d6b7b518e37', shootingRangeId: '6122a10c6e321d6b7b518e57' })}
          />
        </ViewContainer>
      )}

      {shouldScan && (
        <>
          <BarCodeScanner
            barCodeTypes={['qr']}
            type="back"
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />

          <View
            style={{
              position: 'absolute',
              left: 5,
              right: 5,
              bottom: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              text="Cancelar"
              onPress={() => setShouldScan((prevState) => !prevState)}
            />
          </View>
        </>
      )}
    </ScreenContainer>
  );
};

export { PairDeviceScreen };
