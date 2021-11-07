import { useState } from 'react';

import { eliteShooterAPI } from '@services/eliteShooterApi/api';

import { authEndpoints } from '@services/eliteShooterApi/endpoints/authEndpoints';
import { Alert, Keyboard } from 'react-native';
import { httpErrorMessages } from '@utils/httpErrorMessages';
import { alertErrorFromHttpCall } from '../../../utils/alertErrorFromHttpCall';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState('');

  async function handleLogin(params) {
    try {
      Keyboard.dismiss();
      const { username, password } = params;
      setLoading(true);
      const { data } = await authEndpoints.signin({ username, password });
      const { _id, token, role } = data;

      eliteShooterAPI.defaults.headers.Authorization = `Bearer ${token}`;

      setUserId(_id);
      setIsAdmin(role === 'admin');
      setAuthenticated(true);

    } catch (err) {
      alertErrorFromHttpCall(err);
    } 
    setLoading(false);
  }

  function handleLogout() {
    setAuthenticated(false);
    setUserId(null);
    setIsAdmin(null);
    eliteShooterAPI.defaults.headers.Authorization = undefined;
  }

  return { authenticated, isAdmin, userId, loading, handleLogin, handleLogout };
}
