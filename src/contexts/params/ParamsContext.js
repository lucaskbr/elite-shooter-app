import React, {useState,  createContext } from 'react';

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
