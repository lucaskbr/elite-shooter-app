import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { S } from './style';
import { TopThreeItem } from './TopThreeItem';


const TopThree = (props) => {
  const { data } = props;

  return (
    <S.TopThree>
      <S.FirstRow>
        {_.get(data, '[0]') && <TopThreeItem isFirst data={data[0]} />}
      </S.FirstRow>

      <S.SecondRow>
        {_.get(data, '[1]') && <TopThreeItem data={data[1]} />}
        {_.get(data, '[2]') && <TopThreeItem data={data[2]} />} 
      </S.SecondRow>
    </S.TopThree>
  );
};

TopThree.propTypes = {
  data: PropTypes.array.isRequired,
};

TopThree.defaultProps = {};

export { TopThree };
