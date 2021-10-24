import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const authEndpoints = {
  signin: ({ username, password }) =>
    eliteShooterAPI.post('/auth/signin', {
      username,
      password,
    }),

  signup: ({
    firstname,
    lastname,
    username,
    email,
    confirmEmail,
    password,
    confirmPassword,
    gender,
  }) =>
    eliteShooterAPI.post('/auth/signup', {
      firstname,
      lastname,
      username,
      email,
      confirmEmail,
      password,
      confirmPassword,
      gender,
    }),
};

export { authEndpoints };
