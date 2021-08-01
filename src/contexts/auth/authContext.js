import React, { createContext } from 'react';

import useAuth from './hooks/useAuth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { isAdmin, authenticated, loading, handleLogin, handleLogout } =
    useAuth();

  return (
    <AuthContext.Provider
      value={{ isAdmin, loading, authenticated, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
