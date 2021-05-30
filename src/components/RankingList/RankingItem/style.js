import styled from 'styled-components/native';

const RankingItem = styled.View`
  width: 100%;
  padding: 4px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ProfilePic = styled.View`
  width: 25%;
  align-items: center;
`;

const Name = styled.Text`
  text-align: center;
  width: 25%;
  font-size: 16px;
  font-family: 'Exo2_700Bold_Italic';
  text-transform: capitalize;
`;

const Points = styled.Text`
  text-align: center;
  width: 25%;
  font-size: 16px;
  font-family: 'Exo2_700Bold';
  color: #FF0066;
`;

const Position = styled.Text`
  text-align: center;
  width: 25%;
  font-size: 16px;
  font-family: 'Exo2_600SemiBold_Italic';
  color: #CACACA;
`;

const S = {
  RankingItem,
  ProfilePic,
  Name,
  Points,
  Position
};

export { S };
