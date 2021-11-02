import { useState } from 'react';

import { shootingRangesEndpoints } from '@services/eliteShooterApi/endpoints/shootingRanges';
import { placesEndpoint } from '@services/eliteShooterApi/endpoints/placesEndpoint';
import { alertErrorFromHttpCall } from '@utils/alertErrorFromHttpCall';

export default function usePlaces() {
  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [shootingRanges, setShootingRanges] = useState([]);

  async function handlePlaces(params) {
    setIsLoading(true);
    placesEndpoint.findAll(params)
    .then(response => setPlaces(response.data))
    .catch((err) => alertErrorFromHttpCall(err))
  }

  async function handleShootingRanges(params) {
    try {
      setIsLoading(true);
      const { data } = await shootingRangesEndpoints.findAll(params);
      setShootingRanges(data);
    } catch (err) {
      alertErrorFromHttpCall(err);
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
