import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const docketsEndpoints = {
  generate: ({ competitionCode, shootingActivityId }) =>
    eliteShooterAPI.post('/dockets', {
      shootingActivityId,
      competitionCode: 10,
    }),
};

export { docketsEndpoints };
