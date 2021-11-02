import React from 'react';

import Spinner from 'react-native-loading-spinner-overlay';
import { ScreenContainer } from '@components/ScreenContainer';

const IsLoading = () => (
  <ScreenContainer
    paddingVertical={15}
    paddingHorizontal={15}
    style={{ justifyContent: 'center' }}
  >
    <Spinner
      visible
      size="large"
      color="#FF0066"
      overlayColor="#FFF"
      textContent="Buscando informações"
      textStyle={{ color: '#FF0066' }}
    />
  </ScreenContainer>
);

export { IsLoading };
