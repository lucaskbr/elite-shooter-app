import styled from 'styled-components/native';


const GunCard = styled.TouchableOpacity`
  background: #ffffff;
  width: 100%;
  flex-direction: row;
  elevation: 2;
  padding: 15px;
  border-width: 1px;
  border-color: transparent;
  border-radius: 4px;
`;

const GunImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const GunImageWrapper = styled.View`
  background: #FF0066;
  padding: 10px;
  height: 50px;
  width: 50px;
  border-width: 1px;
  border-color: #CACACA;
  border-radius: 500px;

`;

const InfoWrapper = styled.View`
  margin-left: 15px;
`;

const BrandModel = styled.Text`
  color: #003366;
  font-family: 'Exo2_700Bold';
  font-size: 18px;
`;

const Serie = styled.Text`
  font-family: 'Exo2_300Light';
  font-size: 16px;
  color: #CACACA;
`;

const Points = styled.Text`
  font-family: 'Exo2_300Light';
  font-size: 16px;
  color: #CACACA;
`;

const S = {
  GunCard,
  GunImage,
  GunImageWrapper,
  InfoWrapper,
  BrandModel,
  Serie,
  Points
};

export { S };
