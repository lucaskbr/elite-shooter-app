import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const shootingRangesEndpoints = {
  create: ({ code, type, placeId, sensorEquipmentId }) => eliteShooterAPI.post('/shooting-ranges', {
    code,
    type,
    placeId,
    sensorEquipmentId
  }),

  findAll: ({ placeId }) =>
    eliteShooterAPI.get('/shooting-ranges', {
      params: {
        placeId,
      }
    }),

  findById: (id) => eliteShooterAPI.get(`/shooting-ranges/${id}`),
};

export { shootingRangesEndpoints };
