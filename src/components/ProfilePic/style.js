import styled from 'styled-components/native';

const ProfilePic = styled.Image`
  border: transparent;
  border-radius: 50;
  height: ${(props) => props.height};
  width: ${(props) => props.height};
  margin: 0;
  padding: 0;

`;

const S = {
  ProfilePic,
};

export { S };
