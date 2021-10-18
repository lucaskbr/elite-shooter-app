import { eliteShooterAPI } from '@services/eliteShooterApi/api';

const qrcodesEndpoints = {
  generate: ({ shootingRangeId }) =>
    eliteShooterAPI.post('/qrcodes', {
      shootingRangeId
    }),
};

export { qrcodesEndpoints };
