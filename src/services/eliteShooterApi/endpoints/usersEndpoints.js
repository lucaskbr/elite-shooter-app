import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const usersEndpoints = {

  findById: ({ id }) => eliteShooterAPI.get(`/users/${id}`),
};

export { usersEndpoints };
