import axios from 'axios';
import { BASE_URL } from '@env';

const baseURL = BASE_URL;

const eliteShooterAPI = axios.create({
  baseURL,
  // paramsSerializer: params => Qs.stringify(params, { arrayFormat: 'repeat' })
  // paramsSerializer: params => QueryString.stringify(params, { arrayFormat: 'repeat' })
});

const eliteShooterURI = baseURL;

export { eliteShooterAPI, eliteShooterURI };
