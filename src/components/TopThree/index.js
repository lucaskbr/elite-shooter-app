import * as React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';
import { TopThreeItem } from './TopThreeItem';



const TopThree = (props) => {

  return <S.TopThree>
    <S.FirstRow>

      <TopThreeItem isFirst />
    </S.FirstRow>

    <S.SecondRow>
      <TopThreeItem />
      <TopThreeItem />
    </S.SecondRow>

  </S.TopThree>;
};

TopThree.propTypes = {
};

TopThree.defaultProps = {};

export { TopThree };
