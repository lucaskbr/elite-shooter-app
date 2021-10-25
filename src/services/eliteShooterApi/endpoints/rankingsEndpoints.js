import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const rankingsEndpoints = {
  findAll: ({ period, afterPosition, userIdToFocus, limit }) => eliteShooterAPI.get('/rankings', {
    params: {
      period,
      afterPosition,
      userIdToFocus,
      limit 
    }
  }),
};

export { rankingsEndpoints };
