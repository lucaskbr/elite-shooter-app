import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const placesEndpoint = {
  findAll: ({}) => eliteShooterAPI.get('/places', {}),

  findById: (id) => eliteShooterAPI.get(`/places/${id}`),
};

export { placesEndpoint };
