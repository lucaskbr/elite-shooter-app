import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const gunsEndpoints = {
  findAll: () =>
    eliteShooterAPI.get('/guns'),
};

export { gunsEndpoints };
