import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const chartsEndpoints = {
  shotsDiference: ({ ownerId, shootingActivityId, limit }) => eliteShooterAPI.get('/charts', {
    params: {
      chartType: 'shotsDiference',
      ownerId,
      shootingActivityId,
      limit,
    }
  }),

  accurateRegions: ({ ownerId, shootingActivityId, limit }) => eliteShooterAPI.get('/charts', {
    params: {
      chartType: 'accurateRegions',
      ownerId,
      shootingActivityId,
      limit,
    }
  }),

  scoreHistory: ({ ownerId, shootingActivityId, limit }) => eliteShooterAPI.get('/charts', {
    params: {
      chartType: 'scoreHistory',
      ownerId,
      shootingActivityId,
      limit,
    }
  }),

};

export { chartsEndpoints };
