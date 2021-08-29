import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const rankingsEndpoints = {
  findAll: ({ afterPosition, userIdToFocus, limit }) => eliteShooterAPI.get('/rankings', {
    params: {
      afterPosition,
      userIdToFocus,
      limit 
    }
  }),
};

export { rankingsEndpoints };
