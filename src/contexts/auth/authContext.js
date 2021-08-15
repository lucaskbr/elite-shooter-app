import React, { createContext } from 'react';

import useAuth from './hooks/useAuth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { isAdmin, authenticated, userId, loading, handleLogin, handleLogout } =
    useAuth();

  return (
    <AuthContext.Provider
      value={{ isAdmin, userId, loading, authenticated, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
