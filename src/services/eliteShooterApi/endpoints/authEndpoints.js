import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const authEndpoints = {
  signin: ({ username, password }) =>
    eliteShooterAPI.post('/auth/signin', {
      username,
      password,
    }),
};

export { authEndpoints };
