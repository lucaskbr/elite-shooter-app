import { useState } from 'react';

import { Alert, Keyboard } from 'react-native';
import { shootingRangesEndpoints } from '@services/eliteShooterApi/endpoints/shootingRanges';
import { placesEndpoint } from '@services/eliteShooterApi/endpoints/placesEndpoint';

const onError = (code) =>
  Alert.alert('Ocorreu um erro ao realizar o login', handleErrorMsg[code], [
    { text: 'OK' },
  ]);

export default function usePlaces() {
  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [shootingRanges, setShootingRanges] = useState([]);

  async function handlePlaces(params) {
    try {
      setIsLoading(true);
      const { data } = await placesEndpoint.findAll({});
      setPlaces(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleShootingRanges(params) {
    try {
      setIsLoading(true);
      const { data } = await shootingRangesEndpoints.findAll(params);
      setShootingRanges(data);
    } catch (err) {
      console.log(err);
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
