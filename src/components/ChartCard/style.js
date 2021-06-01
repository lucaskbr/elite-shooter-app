import styled from 'styled-components/native';

const ChartCard = styled.View`
  background: #ffffff;
  width: 100%;
  height: ${props => props.height && `${props.height}px`};
  align-items: flex-start;
  elevation: 2;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 12px;
`;

const ChartContainer = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
`;

const TextContainer = styled.View`
`;

const Title = styled.Text`
  font-family: 'Exo2_700Bold';
`;

const Subtitle = styled.Text`
  font-family: 'Exo2_300Light';
`;

const S = {
  ChartCard,
  ChartContainer,
  TextContainer,
  Title,
  Subtitle
};

export { S };
