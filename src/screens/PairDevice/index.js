import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { IconOutline } from '@ant-design/icons-react-native';

import { Button, ScreenContainer } from '../../components';
import { ViewContainer } from '../../containers';

const PairDeviceScreen = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [shouldScan, setShouldScan] = useState(false);

  const { navigation } = props;
  const { navigate } = navigation;

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await BarCodeScanner.requestPermissionsAsync();
  //     setHasPermission(status === 'granted');
  //   })();
  // }, []);

  // const handleBarCodeScanned = ({ type, data }) => {
  //   setScanned(true);
  //   alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  // };

  // if (hasPermission === null) {
  //   return <Text>Requesting for camera permission</Text>;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  return (
    <ScreenContainer paddingHorizontal={10}>
      {!shouldScan && (
        <ViewContainer direction="column">
          <IconOutline name="qrcode" size={300} />
          <Button
            text="Scanear agora"
            // onPress={() => setShouldScan((prevState) => !prevState)}
            onPress={() => navigate('ListGunsToUse')}
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
