import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const gunsEndpoints = {
  findAll: ({ brand, model, type, caliber, weight, placeId, ownerId, isActive, }) => eliteShooterAPI.get('/guns', {
    params: {
      brand,
      model,
      type,
      caliber,
      weight,
      placeId,
      ownerId,
      isActive,
    }
  }),

  create: ({ placeId, brand, model, type, caliber, weight }) => eliteShooterAPI.post('/guns', {
    placeId,
    brand,
    model,
    type,
    caliber,
    weight
  }),

  delete: (id) => eliteShooterAPI.delete(`/guns/${id}`),
};

export { gunsEndpoints };
