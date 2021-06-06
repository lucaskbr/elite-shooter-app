import * as React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';

const ChartCard = (props) => {
  const { children, title, subtitle, ...rest } = props;

  return (
    <S.ChartCard {...rest}>
      <S.ChartContainer>
        <S.TextContainer>
          <S.Title>
            {title}
          </S.Title>
          <S.Subtitle>
            {subtitle}
          </S.Subtitle>
        </S.TextContainer>
        {children}
      </S.ChartContainer>
    </S.ChartCard>
  );
};

ChartCard.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.number.isRequired,
};

ChartCard.defaultProps = {};

export { ChartCard };
