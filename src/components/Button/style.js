import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  background-color: #ff0066;
  border-color: transparent;
  padding: 10px 0;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #fff;
`;

const S = {
  Button,
  ButtonText,
};

export { S };
