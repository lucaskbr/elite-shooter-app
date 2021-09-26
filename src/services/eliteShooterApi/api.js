import axios from 'axios';
import QueryString from 'qs';

const baseURL = 'http://192.168.18.85:3000';

const eliteShooterAPI = axios.create({
  baseURL,
  // paramsSerializer: params => Qs.stringify(params, {arrayFormat: 'repeat'})
  // paramsSerializer: params => QueryString.stringify(params, { arrayFormat: 'repeat' })
});

const eliteShooterURI = baseURL;

export { eliteShooterAPI, eliteShooterURI };
