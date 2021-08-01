import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const authEndpoint = {
  signin: ({ username, password }) =>
    eliteShooterAPI.post('/auth/signin', {
      username,
      password,
    }),
};

export { authEndpoint };
