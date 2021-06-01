import * as React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';

const ChartCard = (props) => {
  const { children, ...rest } = props;

  return (
    <S.ChartCard {...rest}>
      <S.ChartContainer>
        <S.TextContainer>
          <S.Title>
            Disparos: Acertos x Erros
          </S.Title>
          <S.Subtitle>
            Ultimos 7 treinos
          </S.Subtitle>
        </S.TextContainer>
        {children}
      </S.ChartContainer>
    </S.ChartCard>
  );
};

ChartCard.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.number,
};

ChartCard.defaultProps = {};

export { ChartCard };
