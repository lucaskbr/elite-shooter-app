import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const shootingRangesEndpoints = {
  findAll: ({ placeId }) =>
    eliteShooterAPI.get('/shooting-ranges', {
      placeId,
    }),

  findById: (id) => eliteShooterAPI.get(`/shooting-ranges/${id}`),
};

export { shootingRangesEndpoints };
