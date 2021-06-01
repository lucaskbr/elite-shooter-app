import styled from 'styled-components/native';

const RankingItem = styled.View`
  width: 100%;
  padding: 4px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: ${props => props.itsMe ? '#FF0066' : '#FFF'};
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
  color: ${props => props.itsMe ? '#FFF' : '#000'};
`;

const Points = styled.Text`
  text-align: center;
  width: 25%;
  font-size: 16px;
  font-family: 'Exo2_700Bold';
  color: ${props => props.itsMe ? '#FFF' : '#FF0066'};
`;

const Position = styled.Text`
  text-align: center;
  width: 25%;
  font-size: 16px;
  font-family: 'Exo2_600SemiBold_Italic';
  color: ${props => props.itsMe ? '#FFF' : '#CACACA'};
`;

const S = {
  RankingItem,
  ProfilePic,
  Name,
  Points,
  Position
};

export { S };
