import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const gunsEndpoints = {
  findAll: ({ placeId }) => eliteShooterAPI.get('/guns', {
    params: {
      placeId
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
