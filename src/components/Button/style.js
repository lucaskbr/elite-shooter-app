import styled from 'styled-components/native';

const handleTypeBtnBackground = (type) => {
  if (type === 'primary') {
    return '#ff0066';
  }

  if (type === 'invisible') {
    return 'transparent';
  }
};

const Button = styled.TouchableOpacity`
  width: 100%;
  background: ${(props) => handleTypeBtnBackground(props.type)};
  border: 1px solid transparent;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #fff;
  font-family: 'Exo2_700Bold';
`;

const S = {
  Button,
  ButtonText,
};

export { S };
