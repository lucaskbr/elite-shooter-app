import styled from 'styled-components/native';

const ProfileInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
  position: relative;
`;

const Logout = styled.Text`
  position: absolute;
  font-weight: bold;
  left: 80%;
  top: 0;
`;

const S = {
  ProfileInfo,
  Logout,
};

export { S };
