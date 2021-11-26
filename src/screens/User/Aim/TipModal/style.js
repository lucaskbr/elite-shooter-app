import styled from 'styled-components/native';

const ModalContainer = styled.View`
  flex: 0.4;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
  padding: 15px;
  justify-content: space-between;
`;

const TipsContainer = styled.View`
  align-items: flex-start;
`;

const Title = styled.Text`
  text-align: center;
  color: #003366;
  font-size: 20px;
  font-family: 'Exo2_700Bold';
`;

const TipPic = styled.Image`
  border-width: 1px;
  height: 180px;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const S = {
  ModalContainer,
  TipsContainer,
  Title,
  TipPic,
};

export { S };
