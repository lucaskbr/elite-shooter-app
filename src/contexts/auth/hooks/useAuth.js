import { useState } from 'react';

import { eliteShooterAPI } from '@services/eliteShooterApi/api';

import { authEndpoints } from '@services/eliteShooterApi/endpoints/authEndpoints';
import { Alert, Keyboard } from 'react-native';
import { socket } from '../../../services/socketio';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleLogin(params) {
    Keyboard.dismiss();
    const { username, password } = params;
    setLoading(true);
    try {
      console.log(params)
      const { data } = await authEndpoints.signin({ username, password });
      const { token, role } = data;

      eliteShooterAPI.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
      setIsAdmin(role === 'admin');
    } catch (err) {
      Alert.alert('Ocorreu um erro ao realizar o login', [{ text: 'OK' }]);
    }
    setLoading(false);
  }

  function handleLogout() {
    setAuthenticated(false);
    eliteShooterAPI.defaults.headers.Authorization = undefined;
  }

  return { authenticated, isAdmin, loading, handleLogin, handleLogout };
}
