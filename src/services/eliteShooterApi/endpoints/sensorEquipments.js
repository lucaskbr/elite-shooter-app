import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const sensorEquipmentsEndpoints = {

  create: ({ code, type, placeId }) => eliteShooterAPI.post('/sensor-equipments', {
    code,
    type,
    placeId
  }),

  findAll: ({ assign, placeId }) =>
    eliteShooterAPI.get('/sensor-equipments', {
     params: {
      assign,
      placeId
     }
  }),
};

export { sensorEquipmentsEndpoints };
