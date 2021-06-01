import styled from 'styled-components/native';

const ProfileInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
`;

const Username = styled.Text`
  margin-left: 15px;
  font-size: 22px;
  font-family: 'Exo2_700Bold_Italic';
`;

const ShowAllActivities = styled.Text`
`;


const S = {
  ProfileInfo,
  Username,
  ShowAllActivities
};

export { S };
