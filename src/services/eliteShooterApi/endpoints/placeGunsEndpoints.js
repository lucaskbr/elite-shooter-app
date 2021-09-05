import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const placeGunsEndpoints = {
  findById: ({ id }) => eliteShooterAPI.get(`/place-guns/${id}`)
};

export { placeGunsEndpoints };
