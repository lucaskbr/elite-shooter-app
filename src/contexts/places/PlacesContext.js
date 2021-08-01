import React, { createContext } from 'react';

import usePlaces from './hooks/usePlaces';

const PlacesContext = createContext();

const PlacesProvider = ({ children }) => {
  const { places, shootingRanges, handlePlaces, handleShootingRanges } =
    usePlaces();

  return (
    <PlacesContext.Provider
      value={{ places, shootingRanges, handlePlaces, handleShootingRanges }}
    >
      {children}
    </PlacesContext.Provider>
  );
}

export { PlacesContext, PlacesProvider };
