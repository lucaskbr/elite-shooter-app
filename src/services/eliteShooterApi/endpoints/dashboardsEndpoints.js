import { eliteShooterAPI } from '@services/eliteShooterApi/api';
import Qs from 'qs';

const dashboardsEndpoints = {
  findAll: ({ places, }) => eliteShooterAPI.get('/dashboards', {
    params: {
      places: places,
    },
    paramsSerializer: params => Qs.stringify(params, { arrayFormat: 'repeat' })
  }),
};

export { dashboardsEndpoints };
