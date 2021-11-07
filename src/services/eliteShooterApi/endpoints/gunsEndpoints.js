import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const gunsEndpoints = {
  findById: ({ id }) => eliteShooterAPI.get(`/guns/${id}`),

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

  create: ({ placeId, brand, model, type, numberOfSerie, caliber, weight }) => eliteShooterAPI.post('/guns', {
    placeId,
    brand,
    model,
    type,
    caliber,
    weight,
    numberOfSerie,
  }),

  updateById: ({ id, brand, model, type, numberOfSerie, caliber, weight }) => eliteShooterAPI.put(`/guns/${id}`, {
    brand,
    model,
    type,
    caliber,
    weight,
    numberOfSerie,
  }),

  delete: (id) => eliteShooterAPI.delete(`/guns/${id}`),
};

export { gunsEndpoints };
