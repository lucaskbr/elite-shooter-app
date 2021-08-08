import React, { createContext } from 'react';
import { useState } from 'react/cjs/react.development';

const CurrentShootingActivityContext = createContext();

const CurrentShootingActivityProvider = ({ children }) => {

  const [isOnline, setIsOffline] = useState(false);
  const [sessionEnded, setSessionEnded] = useState(null);

  return (
    <CurrentShootingActivityContext.Provider value={{ isOnline, setIsOffline, sessionEnded, setSessionEnded }}>
      {children}
    </CurrentShootingActivityContext.Provider>
  );
}

export { CurrentShootingActivityContext, CurrentShootingActivityProvider };
