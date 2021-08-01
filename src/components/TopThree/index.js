import * as React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';
import { TopThreeItem } from './TopThreeItem';

const TopThree = (props) => {
  const { data } = props;

  return (
    <S.TopThree>
      <S.FirstRow>
        <TopThreeItem isFirst data={data[0]} />
      </S.FirstRow>

      <S.SecondRow>
        <TopThreeItem data={data[1]} />
        <TopThreeItem data={data[2]} />
      </S.SecondRow>
    </S.TopThree>
  );
};

TopThree.propTypes = {
  data: PropTypes.object.isRequired,
};

TopThree.defaultProps = {};

export { TopThree };
