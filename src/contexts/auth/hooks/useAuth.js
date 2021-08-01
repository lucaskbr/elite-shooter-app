import { useState } from 'react';

import { eliteShooterAPI } from '@services/eliteShooterApi/api';

import { authEndpoint } from '@services/eliteShooterApi/endpoints/authEndpoint';
import { Alert, Keyboard } from 'react-native';

// TODO: Clean comments

const onError = (code) =>
  Alert.alert('Ocorreu um erro ao realizar o login', handleErrorMsg[code], [
    { text: 'OK' },
  ]);

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');

  //   if (token) {
  //     api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
  //     setAuthenticated(true);
  //   }

  //   setLoading(false);
  // }, []);

  async function handleLogin(params) {
    Keyboard.dismiss();
    const { username, password } = params;
    setLoading(true);
    try {
      const { data } = await authEndpoint.signin({ username, password });
      const { token, role } = data;

      eliteShooterAPI.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
      setIsAdmin(role === 'admin');
    } catch (err) {
      onError('default');
    }
    setLoading(false);
  }

  function handleLogout() {
    setAuthenticated(false);
    eliteShooterAPI.defaults.headers.Authorization = undefined;
  }

  return { authenticated, isAdmin, loading, handleLogin, handleLogout };
}
