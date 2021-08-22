import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const shootingActivitiesEndpoint = {
  findAll: ({ ownerId, modality, year, month, populate, limit }) => eliteShooterAPI.get('/shooting-activities', {
      params: {
        ownerId, modality, year, month, populate, limit
      }
    }),

  findById: (id) => eliteShooterAPI.get(`/shooting-activities/${id}`),
};

export { shootingActivitiesEndpoint };
