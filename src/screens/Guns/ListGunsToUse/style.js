import styled from 'styled-components/native';

const ProfileInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 30px;
`;

const Username = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  font-family: 'Exo2_700Bold_Italic';
`;

const S = {
  ProfileInfo,
  Username,
};

export { S };
