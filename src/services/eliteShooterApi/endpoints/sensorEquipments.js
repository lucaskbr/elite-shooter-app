import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const sensorEquipmentsEndpoints = {
  findAll: () =>
    eliteShooterAPI.get('/sensor-equipments'),
};

export { sensorEquipmentsEndpoints };
