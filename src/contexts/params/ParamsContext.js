import React, { createContext } from 'react';
import { useState } from 'react/cjs/react.development';

const ParamsContext = createContext();

const ParamsProvider = ({ children }) => {

  const [currentPlace, setCurrentPlace] = useState(null)

  return (
    <ParamsContext.Provider value={{ currentPlace, setCurrentPlace }}>
      {children}
    </ParamsContext.Provider>
  );
}

export { ParamsContext, ParamsProvider };
