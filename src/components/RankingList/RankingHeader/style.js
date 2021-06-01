import styled from 'styled-components/native';

const RankingHeader = styled.View`
  padding: 20px 5px 20px 5px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  background: #fff;
  border: 1px solid transparent ;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
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
