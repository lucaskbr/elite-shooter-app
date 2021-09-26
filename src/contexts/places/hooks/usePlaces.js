import { useState } from 'react';

import { Alert, Keyboard } from 'react-native';
import { shootingRangesEndpoints } from '@services/eliteShooterApi/endpoints/shootingRanges';
import { placesEndpoint } from '@services/eliteShooterApi/endpoints/placesEndpoint';
import { httpErrorMessages } from '@utils/httpErrorMessages';

const onError = (code) =>
  Alert.alert('Ocorreu um erro ao realizar o login', handleErrorMsg[code], [
    { text: 'OK' },
  ]);

export default function usePlaces() {
  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [shootingRanges, setShootingRanges] = useState([]);

  async function handlePlaces(params) {
    setIsLoading(true);
    placesEndpoint.findAll({})
    .then(response => setPlaces(response.data))
    .catch((err) => {
      const { status } = err.response
      Alert.alert('Desculpe', httpErrorMessages[status],  [{ text: 'OK' }]);
    })
  }

  async function handleShootingRanges(params) {
    try {
      setIsLoading(true);
      const { data } = await shootingRangesEndpoints.findAll(params);
      setShootingRanges(data);
    } catch (err) {
      const { status } = err.response
      Alert.alert('Desculpe', httpErrorMessages[status],  [{ text: 'OK' }]);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    places,
    shootingRanges,
    handlePlaces,
    handleShootingRanges,
  };
}
