import React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';

const ResultText = (props) => {
  const { label, result, colorLabel, colorResult } = props;

  return (
    <S.TextWrapper>
      <S.Label colorLabel={colorLabel}>{label}: </S.Label>
      <S.Result colorResult={colorResult}>{result}</S.Result>
    </S.TextWrapper>
  );
};

// ResultText.propTypes = {
//   label: PropTypes.string.isRequired,
//   result: PropTypes.string.isRequired,
// };

// ResultText.defaultProps = {};

export { ResultText };
