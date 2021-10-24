import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const placesEndpoint = {
  findAll: ({ isActive } = {}) => eliteShooterAPI.get('/places', {
    params: {
      isActive
    }
  }),

  findById: (id) => eliteShooterAPI.get(`/places/${id}`),

  updateById: (id, {
    name,
    isActive
  }) => eliteShooterAPI.put(`/places/${id}`, {
    name,
    isActive
  }),

};

export { placesEndpoint };
