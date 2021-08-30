import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const chartsEndpoints = {
  shotsDiference: ({ ownerId, limit }) => eliteShooterAPI.get('/charts', {
    params: {
      ownerId,
      limit,
      chartType: 'shotsDiference'
    }
  }),

  accurateRegions: ({ ownerId, limit }) => eliteShooterAPI.get('/charts', {
    params: {
      ownerId,
      limit,
      chartType: 'accurateRegions',
    }
  }),
};

export { chartsEndpoints };
