import styled from 'styled-components/native';

const handleBtnBackground = (type) => {
  if (type === 'primary') {
    return '#ff0066';
  }

  if (type === 'success') {
    return '#00D1B2';
  }

  if (type === 'invisible') {
    return 'transparent';
  }
};

const handleBtnColor = (type) => {
  if (type === 'primary') {
    return '#fff';
  }

  if (type === 'success') {
    return '#fff';
  }

  if (type === 'invisible') {
    return '#222';
  }
};

const handleBtnBorder = (type) => {
  if (type === 'primary') {
    return 'transparent';
  }

  if (type === 'success') {
    return 'transparent';
  }

  if (type === 'invisible') {
    return '#C4C4C4';
  }
};

const Button = styled.TouchableOpacity`
  width: 100%;
  background: ${(props) => handleBtnBackground(props.type)};
  border: 1px solid ${(props) => handleBtnBorder(props.type)};
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${(props) => handleBtnColor(props.type)};
  font-family: 'Exo2_700Bold';
`;

const S = {
  Button,
  ButtonText,
};

export { S };
