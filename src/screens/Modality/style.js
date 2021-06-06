import styled from 'styled-components/native';

const ModalityContainer = styled.View`
  background: #FF0066;
  flex: 1;
  height: 100%;
  width: 100%;
  padding: 0 10px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #FF0066;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ModalityCard = styled.TouchableHighlight`
  width: 100%;
  height: 300px;
  background: #FFF;
  elevation: 2;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

const ModalityImg = styled.Image`
  height: 150px;
  width: 100%;
  margin-bottom: 15px;
`;

const ModalityTitle = styled.Text`
  font-family: 'Exo2_700Bold_Italic';
  font-size: 20px;
`;


const S = {
  ModalityContainer,
  ModalityCard,
  ModalityImg,
  ModalityTitle
};

export { S };
