import axios from 'axios';
import { BASE_URL } from '@env';

const baseURL = 'http://192.168.18.106:3000';

const eliteShooterAPI = axios.create({
  baseURL,
  // paramsSerializer: params => Qs.stringify(params, { arrayFormat: 'repeat' })
  // paramsSerializer: params => QueryString.stringify(params, { arrayFormat: 'repeat' })
});

const eliteShooterURI = baseURL;

export { eliteShooterAPI, eliteShooterURI };
