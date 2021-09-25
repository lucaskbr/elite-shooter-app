import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const shootingActivitiesEndpoint = {
  findAll: ({
    score,
    isActive,
    gunId,
    modality,
    placeId,
    ownerId,
    shootingRangeId,
    year,
    month,
    ignoreOwner,
    limit,
    fieldsToRetrieve,
  }) => eliteShooterAPI.get('/shooting-activities', {
      params: {
        score,
        isActive,
        gunId,
        modality,
        placeId,
        ownerId,
        shootingRangeId,
        year,
        month,
        ignoreOwner,
        limit,
        fieldsToRetrieve,
      }
    }),

  findById: (id) => eliteShooterAPI.get(`/shooting-activities/${id}`),

  deleteById: (id) => eliteShooterAPI.delete(`/shooting-activities/${id}`),
};

export { shootingActivitiesEndpoint };
