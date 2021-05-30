import styled from 'styled-components/native';

const RankingHeader = styled.View`
  padding: 10px 5px 10px 5px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

const ProfilePic = styled.View`
  width: 25%;
`;

const Name = styled.Text`
  font-family: 'Exo2_700Bold';
  width: 25%;
  text-align: center;
  font-size: 16px;
`;

const Points = styled.Text`
  font-family: 'Exo2_700Bold';
  width: 25%;
  text-align: center;
  font-size: 16px;
`;

const Position = styled.Text`
  font-family: 'Exo2_700Bold';
  width: 25%;
  text-align: center;
  font-size: 16px;
`;

const S = {
  RankingHeader,
  ProfilePic,
  Name,
  Points,
  Position
};

export { S };
