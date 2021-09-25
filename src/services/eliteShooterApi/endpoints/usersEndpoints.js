import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const usersEndpoints = {
  findById: ({ id }) => eliteShooterAPI.get(`/users/${id}`),

  updateById: ({
    id, 
    email,
    firstname,
    lastname,
    username
  }) => eliteShooterAPI.put(`/users/${id}`, {
    email,
    firstname,
    lastname,
    username,
  }),

  create: ({
    firstname,
    lastname,
    username,
    email,
    confirmEmail,
    password,
    confirmPassword,
    gender,
  }) => eliteShooterAPI.post(`/users`, {
    firstname,
    lastname,
    username,
    email,
    confirmEmail,
    password,
    confirmPassword,
    gender
  })
};

export { usersEndpoints };
