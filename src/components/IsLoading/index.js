import * as React from 'react';
import PropTypes from 'prop-types';

import Spinner from 'react-native-loading-spinner-overlay';

const IsLoading = (props) => {
  const { condition, children } = props;

  return <>
    { !condition && children }
    { condition && 
    <Spinner
      visible={true}
      size="large"
      color="#FF0066"
      overlayColor="#FFF"
      textContent={'Buscando informações'}
      textStyle={{ color: '#FF0066' }}
    />
    }
  </>;
};

IsLoading.propTypes = {
  children: PropTypes.node.isRequired,
  condition: PropTypes.bool.isRequired
};

export { IsLoading };
