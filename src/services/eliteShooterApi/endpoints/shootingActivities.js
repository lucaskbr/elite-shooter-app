import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const shootingActivitiesEndpoint = {
  findAll: ({ owner, modality, year, month, populate, limit }) => {
    const params = new URLSearchParams();

    owner && params.append('owner', owner);

    year && params.append('year', year);

    // month && params.append('month', month);

    limit && params.append('limit', limit);

    modality &&
      modality.map((element) => {
        params.append('modality', element);
      });

    populate &&
      populate.map((element) => {
        params.append('populate', element);
      });

    return eliteShooterAPI.get('/shooting-activities', {
      params,
    });
  },

  findById: (id) => eliteShooterAPI.get(`/shooting-activities/${id}`),
};

export { shootingActivitiesEndpoint };
