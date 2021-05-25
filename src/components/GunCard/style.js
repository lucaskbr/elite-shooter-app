import styled from 'styled-components/native';

const GunCard = styled.TouchableOpacity`
  background: #ffffff;
  width: 100%;
  align-items: flex-start;
  elevation: 2;
  padding: 15px;
  border: 1px solid transparent;
  border-radius: 4px;
`;


const Model = styled.Text`
  font-family: 'Exo2_700Bold';
`;

const Serie = styled.Text`
  font-family: 'Exo2_300Light';
`;

const Points = styled.Text`
  font-family: 'Exo2_300Light';
`;

const S = {
  GunCard,
  Model,
  Serie,
  Points
};

export { S };
