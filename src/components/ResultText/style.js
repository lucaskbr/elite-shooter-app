import styled from 'styled-components/native';

const TextWrapper = styled.Text`
  color: ${(props) => (props.color ? props.color : '#000')};
`;

const Label = styled.Text`
  font-family: 'Exo2_800ExtraBold';
`;

const Result = styled.Text`
  font-family: 'Exo2_500Medium';
`;

const S = {
  TextWrapper,
  Label,
  Result,
};

export { S };
